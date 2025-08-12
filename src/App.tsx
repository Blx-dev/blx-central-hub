import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Maintenance from "./pages/Maintenance";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import Security from "./pages/Security";
import System from "./pages/System";
import Domains from "./pages/Domains";
import Complaints from "./pages/Complaints";
import Backup from "./pages/Backup";
import Logs from "./pages/Logs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/security" element={<Security />} />
          <Route path="/system" element={<System />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/backup" element={<Backup />} />
          <Route path="/logs" element={<Logs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
