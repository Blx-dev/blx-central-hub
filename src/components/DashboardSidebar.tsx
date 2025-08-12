import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Shield, 
  AlertTriangle, 
  BarChart3, 
  Globe, 
  MessageSquare,
  Database,
  Activity
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    active: true
  },
  {
    title: "Bakım Modu",
    icon: Settings,
    href: "/maintenance"
  },
  {
    title: "İstatistikler",
    icon: BarChart3,
    href: "/statistics"
  },
  {
    title: "Kullanıcı Yönetimi",
    icon: Users,
    href: "/users"
  },
  {
    title: "Güvenlik",
    icon: Shield,
    href: "/security"
  },
  {
    title: "Sistem Durumu",
    icon: Activity,
    href: "/system"
  },
  {
    title: "Domain Yönetimi",
    icon: Globe,
    href: "/domains"
  },
  {
    title: "Şikayetler",
    icon: MessageSquare,
    href: "/complaints"
  },
  {
    title: "Yedekleme",
    icon: Database,
    href: "/backup"
  },
  {
    title: "Sistem Logları",
    icon: AlertTriangle,
    href: "/logs"
  }
];

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-card border-r border-border h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">B</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">BLX Panel</h1>
            <p className="text-sm text-muted-foreground">Yönetim Merkezi</p>
          </div>
        </div>
      </div>
      
      <ScrollArea className="h-[calc(100vh-120px)]">
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11",
                item.active && "bg-primary text-primary-foreground shadow-md"
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="w-5 h-5" />
                {item.title}
              </a>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}