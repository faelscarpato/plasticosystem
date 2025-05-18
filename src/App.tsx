
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Importação de módulos
import VendasPage from "./pages/modules/vendas/Index";
import EngenhariaPage from "./pages/modules/engenharia/Index";
import ComprasPage from "./pages/modules/compras/Index";
import EstoquePage from "./pages/modules/estoque/Index";
import PCPPage from "./pages/modules/pcp/Index";
import ProducaoPage from "./pages/modules/producao/Index";
import QualidadePage from "./pages/modules/qualidade/Index";
import ManutencaoPage from "./pages/modules/manutencao/Index";
import LogisticaPage from "./pages/modules/logistica/Index";
import FinanceiroPage from "./pages/modules/financeiro/Index";
import RHPage from "./pages/modules/rh/Index";
import ControlePresencaPage from "./pages/modules/controle-presenca/Index";
import RegistrarPresencaPage from "./pages/modules/controle-presenca/Registrar";
import RelatorioPresencaPage from "./pages/modules/controle-presenca/Relatorio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rotas para os módulos */}
          <Route path="/modules/vendas" element={<VendasPage />} />
          <Route path="/modules/engenharia" element={<EngenhariaPage />} />
          <Route path="/modules/compras" element={<ComprasPage />} />
          <Route path="/modules/estoque" element={<EstoquePage />} />
          <Route path="/modules/pcp" element={<PCPPage />} />
          <Route path="/modules/producao" element={<ProducaoPage />} />
          <Route path="/modules/qualidade" element={<QualidadePage />} />
          <Route path="/modules/manutencao" element={<ManutencaoPage />} />
          <Route path="/modules/logistica" element={<LogisticaPage />} />
          <Route path="/modules/financeiro" element={<FinanceiroPage />} />
          <Route path="/modules/rh" element={<RHPage />} />
          
          {/* Rotas para o módulo de controle de presença */}
          <Route path="/modules/controle-presenca" element={<ControlePresencaPage />} />
          <Route path="/modules/controle-presenca/registrar" element={<RegistrarPresencaPage />} />
          <Route path="/modules/controle-presenca/relatorio" element={<RelatorioPresencaPage />} />
          
          {/* Rota de fallback para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
