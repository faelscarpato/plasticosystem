
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";

// Importação de módulos principais
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

// RH
import RecrutamentoPage from "./pages/modules/rh/Recrutamento";
import ColaboradoresPage from "./pages/modules/rh/Colaboradores";
import TreinamentosPage from "./pages/modules/rh/Treinamentos";

// Engenharia
import ProjetosPage from "./pages/modules/engenharia/Projetos";
import EspecificacoesPage from "./pages/modules/engenharia/Especificacoes";
import DesenhosPage from "./pages/modules/engenharia/Desenhos";

// Compras
import FornecedoresPage from "./pages/modules/compras/Fornecedores";
import CotacoesPage from "./pages/modules/compras/Cotacoes";
import PedidosCompraPage from "./pages/modules/compras/Pedidos";

// Estoque
import MateriaisPage from "./pages/modules/estoque/Materiais";
import MovimentacoesPage from "./pages/modules/estoque/Movimentacoes";
import InventariosPage from "./pages/modules/estoque/Inventarios";

// PCP
import OrdensPage from "./pages/modules/pcp/Ordens";
import ProgramacaoPage from "./pages/modules/pcp/Programacao";
import CapacidadePage from "./pages/modules/pcp/Capacidade";

// Produção
import ApontamentosPage from "./pages/modules/producao/Apontamentos";
import EficienciaPage from "./pages/modules/producao/Eficiencia";
import ParadasPage from "./pages/modules/producao/Paradas";

// Qualidade
import InspecoesPage from "./pages/modules/qualidade/Inspecoes";
import NaoConformidadesPage from "./pages/modules/qualidade/NaoConformidades";
import AuditoriasPage from "./pages/modules/qualidade/Auditorias";

// Manutenção
import OrdensManutencaoPage from "./pages/modules/manutencao/Ordens";
import EquipamentosPage from "./pages/modules/manutencao/Equipamentos";
import PreventivasPage from "./pages/modules/manutencao/Preventivas";

// Logística
import ExpedicaoPage from "./pages/modules/logistica/Expedicao";
import TransportesPage from "./pages/modules/logistica/Transportes";
import RecebimentosPage from "./pages/modules/logistica/Recebimentos";

// Financeiro
import ContasReceberPage from "./pages/modules/financeiro/ContasReceber";
import ContasPagarPage from "./pages/modules/financeiro/ContasPagar";
import FluxoCaixaPage from "./pages/modules/financeiro/FluxoCaixa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Rotas para os módulos principais */}
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
          
          {/* RH */}
          <Route path="/modules/rh/recrutamento" element={<RecrutamentoPage />} />
          <Route path="/modules/rh/colaboradores" element={<ColaboradoresPage />} />
          <Route path="/modules/rh/treinamentos" element={<TreinamentosPage />} />
          
          {/* Engenharia */}
          <Route path="/modules/engenharia/projetos" element={<ProjetosPage />} />
          <Route path="/modules/engenharia/especificacoes" element={<EspecificacoesPage />} />
          <Route path="/modules/engenharia/desenhos" element={<DesenhosPage />} />
          
          {/* Compras */}
          <Route path="/modules/compras/fornecedores" element={<FornecedoresPage />} />
          <Route path="/modules/compras/cotacoes" element={<CotacoesPage />} />
          <Route path="/modules/compras/pedidos" element={<PedidosCompraPage />} />
          
          {/* Estoque */}
          <Route path="/modules/estoque/materiais" element={<MateriaisPage />} />
          <Route path="/modules/estoque/movimentacoes" element={<MovimentacoesPage />} />
          <Route path="/modules/estoque/inventarios" element={<InventariosPage />} />
          
          {/* PCP */}
          <Route path="/modules/pcp/ordens" element={<OrdensPage />} />
          <Route path="/modules/pcp/programacao" element={<ProgramacaoPage />} />
          <Route path="/modules/pcp/capacidade" element={<CapacidadePage />} />
          
          {/* Produção */}
          <Route path="/modules/producao/apontamentos" element={<ApontamentosPage />} />
          <Route path="/modules/producao/eficiencia" element={<EficienciaPage />} />
          <Route path="/modules/producao/paradas" element={<ParadasPage />} />
          
          {/* Qualidade */}
          <Route path="/modules/qualidade/inspecoes" element={<InspecoesPage />} />
          <Route path="/modules/qualidade/nao-conformidades" element={<NaoConformidadesPage />} />
          <Route path="/modules/qualidade/auditorias" element={<AuditoriasPage />} />
          
          {/* Manutenção */}
          <Route path="/modules/manutencao/ordens" element={<OrdensManutencaoPage />} />
          <Route path="/modules/manutencao/equipamentos" element={<EquipamentosPage />} />
          <Route path="/modules/manutencao/preventivas" element={<PreventivasPage />} />
          
          {/* Logística */}
          <Route path="/modules/logistica/expedicao" element={<ExpedicaoPage />} />
          <Route path="/modules/logistica/transportes" element={<TransportesPage />} />
          <Route path="/modules/logistica/recebimentos" element={<RecebimentosPage />} />
          
          {/* Financeiro */}
          <Route path="/modules/financeiro/contas-receber" element={<ContasReceberPage />} />
          <Route path="/modules/financeiro/contas-pagar" element={<ContasPagarPage />} />
          <Route path="/modules/financeiro/fluxo-caixa" element={<FluxoCaixaPage />} />
          
          {/* Rota de fallback para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
