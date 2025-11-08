import { BarChart3, Users, Settings, UserCheck, Shield, ChevronLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const roles = [
  {
    title: "Overview",
    subtitle: "Analytics and disruption overview",
    url: "/",
    icon: BarChart3,
    active: true,
  },
  {
    title: "Flight Operations Controllers",
    subtitle: "Swaps, delays, cancellations, tail assignme...",
    url: "/flight-ops",
    icon: Users,
  },
  {
    title: "Hub Management Systems",
    subtitle: "Connections, aircraft servicing, baggage...",
    url: "/hub-management",
    icon: Settings,
  },
  {
    title: "Service Recovery Agents",
    subtitle: "Passenger rebooking, communication, ac...",
    url: "/service-recovery",
    icon: UserCheck,
  },
  {
    title: "Airport Operations Manager",
    subtitle: "Gates, counters, belts, runways resource...",
    url: "/airport-ops",
    icon: Shield,
    badge: true,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarContent className="bg-sidebar-background">
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {open && (
              <div>
                <h2 className="text-sm font-semibold text-sidebar-foreground">User Roles</h2>
                <p className="text-xs text-muted-foreground">Select your operational role</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {roles.map((role) => (
                <SidebarMenuItem key={role.title}>
                  <SidebarMenuButton
                    asChild
                    className={isActive(role.url) ? "bg-sidebar-accent" : ""}
                  >
                    <NavLink
                      to={role.url}
                      end
                      className="flex items-start gap-3 px-3 py-3 hover:bg-sidebar-accent relative"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
                    >
                      <role.icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-sidebar-foreground" />
                      {open && (
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-sidebar-foreground truncate">
                              {role.title}
                            </p>
                            {role.badge && (
                              <span className="h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {role.subtitle}
                          </p>
                        </div>
                      )}
                      {isActive(role.url) && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
