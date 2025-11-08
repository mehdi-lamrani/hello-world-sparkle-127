import { cn } from "@/lib/utils";

interface CircularProgressProps {
  percentage: number;
  label: string;
  sublabel: string;
  color?: "destructive" | "warning" | "success" | "muted";
  size?: "sm" | "md" | "lg";
}

export function CircularProgress({
  percentage,
  label,
  sublabel,
  color = "muted",
  size = "md",
}: CircularProgressProps) {
  const sizeMap = {
    sm: { circle: 80, stroke: 8, text: "text-xl", sub: "text-xs" },
    md: { circle: 120, stroke: 10, text: "text-3xl", sub: "text-sm" },
    lg: { circle: 160, stroke: 12, text: "text-4xl", sub: "text-base" },
  };

  const config = sizeMap[size];
  const radius = (config.circle - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    destructive: "stroke-destructive",
    warning: "stroke-warning",
    success: "stroke-success",
    muted: "stroke-muted-foreground",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: config.circle, height: config.circle }}>
        <svg className="transform -rotate-90" width={config.circle} height={config.circle}>
          <circle
            cx={config.circle / 2}
            cy={config.circle / 2}
            r={radius}
            className="stroke-muted"
            strokeWidth={config.stroke}
            fill="none"
          />
          <circle
            cx={config.circle / 2}
            cy={config.circle / 2}
            r={radius}
            className={cn("transition-all duration-300", colorMap[color])}
            strokeWidth={config.stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold text-foreground", config.text)}>{percentage}%</span>
          <span className={cn("text-muted-foreground uppercase", config.sub)}>{label}</span>
        </div>
      </div>
      <p className="text-xs text-center text-muted-foreground uppercase font-medium max-w-[120px]">
        {sublabel}
      </p>
    </div>
  );
}
