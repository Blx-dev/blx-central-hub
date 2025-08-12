import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Settings2, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  url: string;
  maintenanceMode: boolean;
  status: "online" | "maintenance" | "offline";
}

const projects: Project[] = [
  {
    id: "1",
    name: "BLX Ana Site",
    url: "blx.dev",
    maintenanceMode: false,
    status: "online"
  },
  {
    id: "2", 
    name: "BLX Portfolio",
    url: "portfolio.blx.dev",
    maintenanceMode: true,
    status: "maintenance"
  },
  {
    id: "3",
    name: "BLX API",
    url: "api.blx.dev", 
    maintenanceMode: false,
    status: "online"
  }
];

export function MaintenanceToggle() {
  const [projectList, setProjectList] = useState<Project[]>(projects);

  const toggleMaintenance = (projectId: string) => {
    setProjectList(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              maintenanceMode: !project.maintenanceMode,
              status: project.maintenanceMode ? "online" : "maintenance"
            }
          : project
      )
    );
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case "online":
        return <Badge className="bg-success text-success-foreground">Çevrimiçi</Badge>;
      case "maintenance":
        return <Badge variant="secondary"><AlertTriangle className="w-3 h-3 mr-1" />Bakımda</Badge>;
      case "offline":
        return <Badge variant="destructive">Çevrimdışı</Badge>;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-primary" />
          <CardTitle>Bakım Modu Kontrolü</CardTitle>
        </div>
        <CardDescription>
          Projelerinizi bakım moduna alarak kullanıcıları özel bakım sayfasına yönlendirin
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {projectList.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-medium text-foreground">{project.name}</h4>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">{project.url}</p>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {getStatusBadge(project.status)}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Bakım Modu</span>
                <Switch
                  checked={project.maintenanceMode}
                  onCheckedChange={() => toggleMaintenance(project.id)}
                />
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Bakım Sayfası</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Varsayılan bakım sayfası: https://blxdevs.vercel.app/page4.html
              </p>
              <Button variant="outline" size="sm">
                Bakım Sayfasını Düzenle
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}