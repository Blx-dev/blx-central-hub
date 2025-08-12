import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const Logs = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />
      
      <main className="ml-64 pt-6 px-6 pb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Sistem Logları</h1>
          <p className="text-muted-foreground">Hata logları ve sistem kayıtları</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <CardTitle>Log Görüntüleyici</CardTitle>
            </div>
            <CardDescription>
              Bu sayfa yakında kullanıma açılacak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Log görüntüleme için backend bağlantısı gereklidir.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Logs;