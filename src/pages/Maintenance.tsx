import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MaintenanceToggle } from "@/components/MaintenanceToggle";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />
      
      <main className="ml-64 pt-6 px-6 pb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bakım Modu Yönetimi</h1>
          <p className="text-muted-foreground">Projelerinizi bakım moduna alın ve yönetin</p>
        </div>
        
        <MaintenanceToggle />
      </main>
    </div>
  );
};

export default Maintenance;