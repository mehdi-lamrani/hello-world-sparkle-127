import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, AlertTriangle, CheckCircle, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface NotificationCenterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationCenter({ open, onOpenChange }: NotificationCenterProps) {
  const [chatMessage, setChatMessage] = useState("");
  const navigate = useNavigate();

  const handleViewMitigationPlan = () => {
    onOpenChange(false);
    navigate("/mitigation-planning");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[500px] p-0 flex flex-col h-full">
        <SheetHeader className="bg-gradient-to-r from-primary to-primary/80 p-6 pb-4 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <SheetTitle className="text-white text-lg font-bold">
                  GARV Notification Centre
                </SheetTitle>
                <p className="text-xs text-white/80 mt-0.5">Agentic AI Operations Intelligence</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-xs text-white/70 block mb-2">Agent Mode</label>
            <Select defaultValue="manual">
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">% Manual - Full human control</SelectItem>
                <SelectItem value="assisted">Assisted - AI suggestions</SelectItem>
                <SelectItem value="auto">Automatic - AI decisions</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-white/60 mt-1.5">
              Operations crew decisions with AI insights to supporting context
            </p>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Interactive Notification Centre */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <h3 className="font-semibold text-sm">Interactive Notification Centre</h3>
              <Badge variant="destructive" className="ml-auto h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                2
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Real-time operational intelligence and risk assessment
            </p>
          </div>

          {/* Alert Cards */}
          <div className="p-4 space-y-3">
            {/* Alert 1 */}
            <div className="rounded-lg border-2 border-warning/30 bg-warning/5 overflow-hidden">
              <div className="bg-warning p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Gate reassignment forecast for bank C
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">85%</span>
                  <Button size="sm" variant="secondary" className="h-7 text-xs px-3">
                    VERIFY
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">Impact Analysis</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Flights at Risk</span>
                    </div>
                    <span className="font-semibold">240</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Passengers at Risk</span>
                    </div>
                    <span className="font-semibold">36,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Bags at Risk</span>
                    </div>
                    <span className="font-semibold">43,200</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleViewMitigationPlan}
                  >
                    View Mitigation Plan
                  </Button>
                  <Button variant="outline" className="px-6">
                    Monitor
                  </Button>
                </div>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="rounded-lg border-2 border-warning/30 bg-warning/5 overflow-hidden">
              <div className="bg-warning p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Crew assignment forecast HXZ
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">95%</span>
                  <Button size="sm" variant="secondary" className="h-7 text-xs px-3">
                    VERIFY
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">Impact Analysis</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Flights at Risk</span>
                    </div>
                    <span className="font-semibold">240</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Passengers at Risk</span>
                    </div>
                    <span className="font-semibold">36,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Bags at Risk</span>
                    </div>
                    <span className="font-semibold">43,200</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleViewMitigationPlan}
                  >
                    View Mitigation Plan
                  </Button>
                  <Button variant="outline" className="px-6">
                    Monitor
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Garv Ops Advisor */}
          <div className="p-4 border-t border-border">
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">Garv Ops Advisor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="secondary" className="h-6 text-xs px-2">
                    History
                  </Button>
                  <Badge className="bg-success text-success-foreground text-xs px-2">
                    New Chat
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-2 mb-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-xs text-muted-foreground">Conversation</span>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-3 text-sm">
                  <p className="text-foreground">
                    Hello! I am your Garv AI Ops Advisor. I can help you with operational queries,
                    impact analysis, and decision support. How can I assist you today?
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Ask AI about for guidance..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                  <Button className="w-full" size="sm">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
