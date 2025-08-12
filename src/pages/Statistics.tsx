import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const Statistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />
      
      <main className="ml-64 pt-6 px-6 pb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">İstatistikler</h1>
          <p className="text-muted-foreground">Proje analitikleri ve raporları</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <CardTitle>Detaylı İstatistikler</CardTitle>
            </div>
            <CardDescription>
              Bu sayfa yakında kullanıma açılacak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">İstatistik verileri için backend bağlantısı gereklidir.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Statistics;