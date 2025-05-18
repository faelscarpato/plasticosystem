
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Truck, 
  Clock, 
  CheckCircle, 
  Package, 
  TrendingDown 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const LogisticaPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const entregasData = [
    { name: 'Jan', valor: 88 },
    { name: 'Fev', valor: 92 },
    { name: 'Mar', valor: 90 },
    { name: 'Abr', valor: 94 },
    { name: 'Mai', valor: 91 },
    { name: 'Jun', valor: 95 },
  ];

  const custoFreteData = [
    { name: 'Sudeste', valor: 45 },
    { name: 'Sul', valor: 25 },
    { name: 'Nordeste', valor: 15 },
    { name: 'Centro-Oeste', valor: 10 },
    { name: 'Norte', valor: 5 },
  ];

  // Dados de exemplo para as tabelas
  const entregasProgramadasData = [
    { nota: 'NF-12345', cliente: 'Empresa A', cidade: 'São Paulo - SP', previsao: '18/07/2023', transportadora: 'TransRápida', status: 'Em trânsito' },
    { nota: 'NF-12346', cliente: 'Empresa B', cidade: 'Rio de Janeiro - RJ', previsao: '19/07/2023', transportadora: 'LogVeloce', status: 'Separação' },
    { nota: 'NF-12347', cliente: 'Empresa C', cidade: 'Belo Horizonte - MG', previsao: '20/07/2023', transportadora: 'TransRápida', status: 'Programado' },
    { nota: 'NF-12348', cliente: 'Empresa D', cidade: 'Curitiba - PR', previsao: '17/07/2023', transportadora: 'LogVeloce', status: 'Entregue' },
  ];

  const recebimentosData = [
    { pedido: 'PC-4567', fornecedor: 'Resinas Brasil', material: 'PVC Granulado', quantidade: '5000 kg', previsao: '18/07/2023', status: 'Em trânsito' },
    { pedido: 'PC-4568', fornecedor: 'PetroChem', material: 'ABS Granulado', quantidade: '3000 kg', previsao: '20/07/2023', status: 'Programado' },
    { pedido: 'PC-4569', fornecedor: 'Embalagens Sul', material: 'Caixas 30x20', quantidade: '1000 un', previsao: '19/07/2023', status: 'Programado' },
    { pedido: 'PC-4566', fornecedor: 'MaquiPeças', material: 'Rolamentos', quantidade: '200 un', previsao: '16/07/2023', status: 'Recebido' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Logística</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/logistica/expedição')}>
            Expedição
          </Button>
          <Button onClick={() => navigate('/modules/logistica/transportes')}>
            Transportes
          </Button>
          <Button onClick={() => navigate('/modules/logistica/recebimentos')}>
            Recebimentos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="OTIF" 
          value="95%" 
          change={{ value: "2%", positive: true }} 
          icon={CheckCircle}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Tempo Médio de Entrega" 
          value="2,3 dias" 
          change={{ value: "0,2 dia", positive: true }} 
          icon={Clock}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Expedições no Mês" 
          value="87" 
          change={{ value: "5", positive: true }} 
          icon={Package}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Custo de Frete/Venda" 
          value="3,2%" 
          change={{ value: "0,3%", positive: true }} 
          icon={TrendingDown}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Entregas no Prazo (%)" 
          type="line" 
          data={entregasData} 
        />
        <ChartCard 
          title="Distribuição de Fretes por Região" 
          type="pie" 
          data={custoFreteData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Entregas Programadas"
          columns={[
            { key: 'nota', header: 'Nota Fiscal' },
            { key: 'cliente', header: 'Cliente' },
            { key: 'cidade', header: 'Cidade' },
            { key: 'previsao', header: 'Previsão' },
            { key: 'transportadora', header: 'Transportadora' },
            { key: 'status', header: 'Status' }
          ]}
          data={entregasProgramadasData}
          statusColumn="status"
          statusStyles={{
            'em trânsito': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'separação': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'programado': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
            'entregue': 'bg-green-100 text-green-800 hover:bg-green-200',
          }}
        />
        
        <TableCard 
          title="Recebimentos Programados"
          columns={[
            { key: 'pedido', header: 'Pedido' },
            { key: 'fornecedor', header: 'Fornecedor' },
            { key: 'material', header: 'Material' },
            { key: 'quantidade', header: 'Quantidade' },
            { key: 'previsao', header: 'Previsão' },
            { key: 'status', header: 'Status' }
          ]}
          data={recebimentosData}
          statusColumn="status"
          statusStyles={{
            'em trânsito': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'programado': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
            'recebido': 'bg-green-100 text-green-800 hover:bg-green-200',
          }}
        />
      </div>
    </div>
  );
};

export default LogisticaPage;
