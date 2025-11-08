import { useState } from "react";
import { BarChart3, Filter, Search } from "lucide-react";
import { CircularProgress } from "@/components/CircularProgress";
import { FlightTable } from "@/components/FlightTable";
import { NotificationCenter } from "@/components/NotificationCenter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeString = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Overview</h1>
              <p className="text-sm text-muted-foreground">Analytics and disruption overview</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button 
              variant="default" 
              className="gap-2"
              onClick={() => setNotificationOpen(true)}
            >
              <Users className="h-4 w-4" />
              Garv
              <Badge variant="destructive" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                2
              </Badge>
            </Button>
            
            {/* Agent Mode Selector */}
            <div className="flex items-center gap-4 border-l border-border pl-6">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-1">Agent Mode</div>
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm font-semibold">% Assisted</span>
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  AI recommends and prepares actions for human approval.
                </div>
              </div>
              <Select defaultValue="assisted">
                <SelectTrigger className="w-[320px] border-2 border-primary/30 bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">Manual - Full human control</SelectItem>
                  <SelectItem value="assisted">Assisted - AI suggestions with approval</SelectItem>
                  <SelectItem value="auto">Automatic - AI decisions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-right border-l border-border pl-6">
              <p className="text-lg font-bold text-foreground">{timeString}</p>
              <p className="text-xs text-muted-foreground">{dateString}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Operations Overview Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">OPERATIONS OVERVIEW</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">DATE</span>
            <Badge variant="secondary" className="font-semibold">
              TODAY
            </Badge>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              ADD FILTER
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              SEARCH
            </Button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-primary">OVERVIEW</h3>
          </div>

          <div className="grid grid-cols-5 gap-8 justify-items-center">
            <CircularProgress
              percentage={2}
              label="of flights"
              sublabel="DISRUPTED FLIGHTS"
              color="destructive"
            />
            <CircularProgress
              percentage={2}
              label="of flights"
              sublabel="DELAYED"
              color="warning"
            />
            <CircularProgress
              percentage={2}
              label="of pax"
              sublabel="PASSENGERS IMPACTED"
              color="destructive"
            />
            <CircularProgress
              percentage={36}
              label="pax to be recovered"
              sublabel="PAX TO BE RECOVERED"
              color="warning"
            />
            <CircularProgress
              percentage={70}
              label="pax recovered"
              sublabel="PAX RECOVERED"
              color="success"
            />
          </div>
        </div>

        {/* Table Controls */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Show</span>
          <Select defaultValue="50">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            entries · Showing 1 to 50 of 120 flights
          </span>
        </div>

        {/* Flight Table */}
        <FlightTable />
      </main>

      {/* Notification Center */}
      <NotificationCenter open={notificationOpen} onOpenChange={setNotificationOpen} />
    </div>
  );
};

export default Index;

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
