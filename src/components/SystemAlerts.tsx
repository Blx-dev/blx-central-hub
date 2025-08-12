import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Shield, 
  Server, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

interface SystemAlert {
  id: string;
  type: "security" | "performance" | "error" | "maintenance";
  title: string;
  message: string;
  timestamp: string;
  severity: "low" | "medium" | "high" | "critical";
  resolved: boolean;
}

const alerts: SystemAlert[] = [
  {
    id: "1",
    type: "security",
    title: "Şüpheli giriş denemesi",
    message: "IP: 192.168.1.100 adresinden 5 başarısız giriş denemesi",
    timestamp: "2 dakika önce",
    severity: "high",
    resolved: false
  },
  {
    id: "2", 
    type: "performance",
    title: "Yüksek CPU kullanımı",
    message: "BLX Ana Site sunucusunda %85 CPU kullanımı tespit edildi",
    timestamp: "15 dakika önce",
    severity: "medium",
    resolved: false
  },
  {
    id: "3",
    type: "maintenance",
    title: "Planlı bakım tamamlandı",
    message: "BLX API sunucusu bakımı başarıyla tamamlandı",
    timestamp: "1 saat önce",
    severity: "low",
    resolved: true
  }
];

export function SystemAlerts() {
  const getAlertIcon = (type: SystemAlert['type']) => {
    switch (type) {
      case "security":
        return <Shield className="w-4 h-4" />;
      case "performance":
        return <TrendingUp className="w-4 h-4" />;
      case "error":
        return <XCircle className="w-4 h-4" />;
      case "maintenance":
        return <Server className="w-4 h-4" />;
    }
  };

  const getSeverityBadge = (severity: SystemAlert['severity']) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive">Kritik</Badge>;
      case "high":
        return <Badge className="bg-warning text-warning-foreground">Yüksek</Badge>;
      case "medium":
        return <Badge variant="secondary">Orta</Badge>;
      case "low":
        return <Badge className="bg-info text-info-foreground">Düşük</Badge>;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <CardTitle>Sistem Uyarıları</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            Tümünü Görüntüle
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={`border-l-4 ${
            alert.severity === "critical" 
              ? "border-l-destructive" 
              : alert.severity === "high"
              ? "border-l-warning"
              : alert.severity === "medium"
              ? "border-l-info"
              : "border-l-success"
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    {getSeverityBadge(alert.severity)}
                    {alert.resolved && (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <AlertDescription className="text-xs text-muted-foreground mb-2">
                    {alert.message}
                  </AlertDescription>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {alert.timestamp}
                  </div>
                </div>
              </div>
              {!alert.resolved && (
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Çöz
                </Button>
              )}
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}