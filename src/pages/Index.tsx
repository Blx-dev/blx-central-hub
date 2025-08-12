import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { MaintenanceToggle } from "@/components/MaintenanceToggle";
import { SystemAlerts } from "@/components/SystemAlerts";
import { 
  Users, 
  Globe, 
  Activity, 
  TrendingUp, 
  Server,
  Shield,
  BarChart3,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />
      
      <main className="ml-64 pt-6 px-6 pb-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Toplam Projeler"
            value="12"
            change="+2 bu ay"
            changeType="positive"
            icon={Globe}
            description="Aktif BLX projeleri"
          />
          <StatsCard
            title="Toplam Kullanıcılar"
            value="2,847"
            change="+12% bu hafta"
            changeType="positive"
            icon={Users}
            description="Kayıtlı kullanıcı sayısı"
          />
          <StatsCard
            title="Sistem Durumu"
            value="99.9%"
            change="Uptime"
            changeType="positive"
            icon={Activity}
            description="Son 30 gün"
          />
          <StatsCard
            title="Güvenlik Skoru"
            value="98/100"
            change="Mükemmel"
            changeType="positive"
            icon={Shield}
            description="Güvenlik değerlendirmesi"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MaintenanceToggle />
          <SystemAlerts />
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Günlük Ziyaretçi"
            value="1,234"
            change="+8% dün"
            changeType="positive"
            icon={TrendingUp}
            description="Tüm projeler toplamı"
          />
          <StatsCard
            title="Sunucu Yükü"
            value="47%"
            change="Normal seviye"
            changeType="neutral"
            icon={Server}
            description="Ortalama CPU kullanımı"
          />
          <StatsCard
            title="Ortalama Yanıt Süresi"
            value="142ms"
            change="-15ms bu hafta"
            changeType="positive"
            icon={Clock}
            description="API yanıt süreleri"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
