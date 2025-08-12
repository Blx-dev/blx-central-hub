import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Settings2, ExternalLink, Plus, Trash2 } from "lucide-react";
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
  const [newSiteName, setNewSiteName] = useState("");
  const [newSiteUrl, setNewSiteUrl] = useState("");

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

  const addSite = () => {
    if (newSiteName && newSiteUrl) {
      const newProject: Project = {
        id: (projectList.length + 1).toString(),
        name: newSiteName,
        url: newSiteUrl,
        maintenanceMode: false,
        status: "online"
      };
      setProjectList([...projectList, newProject]);
      setNewSiteName("");
      setNewSiteUrl("");
    }
  };

  const removeSite = (projectId: string) => {
    setProjectList(prev => prev.filter(project => project.id !== projectId));
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
      <CardContent className="space-y-6">
        {/* Add New Site Section */}
        <div className="p-4 border border-border rounded-lg bg-muted/50">
          <h4 className="font-medium text-foreground mb-3">Yeni Site Ekle</h4>
          <div className="flex gap-3">
            <Input
              placeholder="Site adı (örn: BLX Blog)"
              value={newSiteName}
              onChange={(e) => setNewSiteName(e.target.value)}
              className="flex-1"
            />
            <Input
              placeholder="Site URL (örn: blog.blx.dev)"
              value={newSiteUrl}
              onChange={(e) => setNewSiteUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addSite} disabled={!newSiteName || !newSiteUrl}>
              <Plus className="w-4 h-4 mr-2" />
              Ekle
            </Button>
          </div>
        </div>

        {/* Sites List */}
        <div className="space-y-4">
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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSite(project.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
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