import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Complaints = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />
      
      <main className="ml-64 pt-6 px-6 pb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Şikayetler</h1>
          <p className="text-muted-foreground">Kullanıcı şikayetleri ve geri bildirimler</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <CardTitle>Şikayet Sistemi</CardTitle>
            </div>
            <CardDescription>
              Bu sayfa yakında kullanıma açılacak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Şikayet yönetimi için backend bağlantısı gereklidir.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Complaints;