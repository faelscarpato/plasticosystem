
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const PCPPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const aderenciaPlanoData = [
    { name: 'Jan', valor: 92 },
    { name: 'Fev', valor: 88 },
    { name: 'Mar', valor: 95 },
    { name: 'Abr', valor: 89 },
    { name: 'Mai', valor: 93 },
    { name: 'Jun', valor: 94 },
  ];

  const utilizacaoCapacidadeData = [
    { name: 'Linha 1', valor: 85 },
    { name: 'Linha 2', valor: 92 },
    { name: 'Linha 3', valor: 78 },
    { name: 'Linha 4', valor: 88 },
  ];

  // Dados de exemplo para as tabelas
  const ordensProducaoData = [
    { numero: 'OP-1234', produto: 'Conector X-30', quantidade: '5000', inicio: '15/07/2023', fim: '17/07/2023', status: 'Em produção' },
    { numero: 'OP-1235', produto: 'Válvula Y-20', quantidade: '2000', inicio: '17/07/2023', fim: '19/07/2023', status: 'Programada' },
    { numero: 'OP-1236', produto: 'Engrenagem Z-10', quantidade: '3000', inicio: '18/07/2023', fim: '20/07/2023', status: 'Programada' },
    { numero: 'OP-1237', produto: 'Mangueira W-40', quantidade: '4000', inicio: '14/07/2023', fim: '16/07/2023', status: 'Concluída' },
  ];

  const cargaMaquinasData = [
    { maquina: 'Injetora 01', ocupacao: '90%', setup: '2h', producao: '38h', manutencao: '2h', disponivel: '0h' },
    { maquina: 'Injetora 02', ocupacao: '85%', setup: '3h', producao: '35h', manutencao: '0h', disponivel: '4h' },
    { maquina: 'Extrusora 01', ocupacao: '75%', setup: '4h', producao: '32h', manutencao: '0h', disponivel: '6h' },
    { maquina: 'Extrusora 02', ocupacao: '95%', setup: '2h', producao: '40h', manutencao: '0h', disponivel: '0h' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Planejamento e Controle da Produção</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/pcp/ordens')}>
            Ordens de Produção
          </Button>
          <Button onClick={() => navigate('/modules/pcp/programacao')}>
            Programação
          </Button>
          <Button onClick={() => navigate('/modules/pcp/capacidade')}>
            Capacidade
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Aderência ao Plano" 
          value="94%" 
          change={{ value: "2%", positive: true }} 
          icon={CheckCircle}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Lead Time Médio" 
          value="4,8 dias" 
          change={{ value: "0,3 dia", positive: true }} 
          icon={Clock}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Ordens em Andamento" 
          value="7" 
          change={{ value: "1", positive: false }} 
          icon={BarChart3}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Ordens Atrasadas" 
          value="2" 
          change={{ value: "1", positive: true }} 
          icon={AlertTriangle}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Aderência ao Plano de Produção (%)" 
          type="line" 
          data={aderenciaPlanoData} 
        />
        <ChartCard 
          title="Utilização da Capacidade por Linha (%)" 
          type="bar" 
          data={utilizacaoCapacidadeData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Ordens de Produção"
          columns={[
            { key: 'numero', header: 'Número' },
            { key: 'produto', header: 'Produto' },
            { key: 'quantidade', header: 'Quantidade' },
            { key: 'inicio', header: 'Início' },
            { key: 'fim', header: 'Fim' },
            { key: 'status', header: 'Status' }
          ]}
          data={ordensProducaoData}
          statusColumn="status"
          statusStyles={{
            'em produção': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'programada': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'concluída': 'bg-green-100 text-green-800 hover:bg-green-200',
            'atrasada': 'bg-red-100 text-red-800 hover:bg-red-200',
          }}
        />
        
        <TableCard 
          title="Carga de Máquinas (próxima semana)"
          columns={[
            { key: 'maquina', header: 'Máquina' },
            { key: 'ocupacao', header: 'Ocupação' },
            { key: 'setup', header: 'Setup' },
            { key: 'producao', header: 'Produção' },
            { key: 'manutencao', header: 'Manutenção' },
            { key: 'disponivel', header: 'Disponível' }
          ]}
          data={cargaMaquinasData}
        />
      </div>
    </div>
  );
};

export default PCPPage;
