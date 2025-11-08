import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, MapPin, Clock, Users as UsersIcon, Target, CheckCircle2, AlertCircle, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const MitigationPlanning = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Mitigation Planning System</h1>
              <p className="text-sm text-muted-foreground">Weather disruption at CDG — Thunderstorms incoming</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="default" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Garv
            </Button>
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">Service Recovery Agent</p>
                <p className="text-xs text-muted-foreground">Active Role</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">SJ</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Tabs */}
        <Tabs defaultValue="impact" className="mb-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="impact" className="gap-2">
              <Target className="h-4 w-4" />
              Impact Analysis
            </TabsTrigger>
            <TabsTrigger value="historical" className="gap-2">
              <Clock className="h-4 w-4" />
              Historical Events
            </TabsTrigger>
            <TabsTrigger value="decision" className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Decision Summary
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="gap-2">
              <Sparkles className="h-4 w-4" />
              AI Scenarios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="impact" className="mt-6">
            {/* Event Details and Weather Forecast */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Event Details */}
              <Card className="p-6 border-warning/30 bg-warning/5">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <h3 className="font-bold text-foreground">Detailed Impact Analysis</h3>
                  <Badge variant="secondary" className="ml-auto">Probability: 90%</Badge>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Collapse
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Event Details</h4>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground ml-1">Paris CDG Hub — Terminals 2E & 2F</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground ml-1">Active for the next 9-12 hours</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="text-foreground ml-1">Severe Thunderstorm System</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Probability:</span>
                      <span className="text-foreground ml-1">90% Occurrence Likelihood</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <UsersIcon className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Passengers Affected:</span>
                      <span className="text-foreground ml-1">1,250+ across 8 CDG flights</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weather Forecast */}
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-4">Weather Forecast</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Severe thunderstorms over the Paris CDG corridor with intense lightning, torrential rain, and 45-55 mph crosswinds. 
                  Ground operations are intermittently suspended with visibility dropping below 1 km. Expect cascading misconnections 
                  and overnight accommodation demand as the storm band persists through the evening wave.
                </p>
              </Card>
            </div>

            {/* AI-Powered Scenario Recommendations */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">AI-Powered Scenario Recommendations</h2>
              </div>

              {/* Scenario 1: Smart Re-routing */}
              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="font-bold">HIGH</Badge>
                    <h3 className="font-bold text-lg text-foreground">Smart Re-routing & Mass Rebooking</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Execute proactive rebooking for 1,250+ affected passengers across 8 CDG flights, prioritizing Gold tier and time-sensitive connections.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  {/* Key Actions */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Actions</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Activate proactive rebooking engine for 1A 102, 1A 104, 1A 192 passengers</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Priority rebook 187 Gold tier members to premium alternatives</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Deploy self-rebooking capabilities to all affected passengers</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Risks */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Risks</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                        <span className="text-muted-foreground">Limited premium cabin availability on alternate routes</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                        <span className="text-muted-foreground">Potential partner airline coordination delays</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Minimize connection misses for 89% of passengers</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Maintain Gold tier passenger satisfaction above 90%</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Reduce customer service queue by 65%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>AI Confidence Score: <span className="font-bold text-foreground">92%</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm" className="text-primary border-primary/30">Edit Actions</Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">Accept Scenario</Button>
                  </div>
                </div>
              </Card>

              {/* Scenario 2: Strategic Compensation */}
              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="font-bold">HIGH</Badge>
                    <h3 className="font-bold text-lg text-foreground">Strategic Compensation & Accommodation</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Implement tier-based compensation packages with automated approvals for standard cases and expedited accommodations.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  {/* Key Actions */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Actions</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Auto-apply Premium compensation (€450-600) for 203 Gold members</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Deploy Enhanced packages (€180-350) for 487 Silver members</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Secure hotel accommodations for 320 overnight passengers</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Arrange ground transportation for 156 connecting passengers</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Risks */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Risks</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                        <span className="text-muted-foreground">Hotel availability constraints in CDG area</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                        <span className="text-muted-foreground">Budget approval required for premium compensation</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Proactive satisfaction recovery for high-value customers</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Reduced escalations by 72%</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">Improved Net Promoter Score by 18 points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>AI Confidence Score: <span className="font-bold text-foreground">89%</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm" className="text-primary border-primary/30">Edit Actions</Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">Accept Scenario</Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="historical">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Historical Events view coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="decision">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Decision Summary view coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="scenarios">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">AI Scenarios view coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MitigationPlanning;
