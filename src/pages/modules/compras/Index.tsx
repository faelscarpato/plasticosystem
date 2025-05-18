
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Users 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const ComprasPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const comprasMensaisData = [
    { name: 'Jan', valor: 240000 },
    { name: 'Fev', valor: 310000 },
    { name: 'Mar', valor: 280000 },
    { name: 'Abr', valor: 320000 },
    { name: 'Mai', valor: 290000 },
    { name: 'Jun', valor: 350000 },
  ];

  const comprasPorCategoriaData = [
    { name: 'Matéria-Prima', valor: 65 },
    { name: 'Embalagens', valor: 15 },
    { name: 'Manutenção', valor: 12 },
    { name: 'Outros', valor: 8 },
  ];

  // Dados de exemplo para as tabelas
  const pedidosCompraData = [
    { numero: 'PC-4567', fornecedor: 'Resinas Brasil', valor: 'R$ 45.600,00', emissao: '10/07/2023', entrega: '25/07/2023', status: 'Aprovado' },
    { numero: 'PC-4568', fornecedor: 'PetroChem', valor: 'R$ 32.800,00', emissao: '12/07/2023', entrega: '28/07/2023', status: 'Aguardando aprovação' },
    { numero: 'PC-4569', fornecedor: 'Embalagens Sul', valor: 'R$ 8.900,00', emissao: '13/07/2023', entrega: '20/07/2023', status: 'Aprovado' },
    { numero: 'PC-4570', fornecedor: 'MaquiPeças', valor: 'R$ 12.300,00', emissao: '14/07/2023', entrega: '30/07/2023', status: 'Em cotação' },
  ];

  const cotacoesData = [
    { numero: 'COT-1234', item: 'Polipropileno', quantidade: '5000 kg', prazo: '18/07/2023', status: 'Aguardando propostas' },
    { numero: 'COT-1235', item: 'Pigmento azul', quantidade: '200 kg', prazo: '19/07/2023', status: 'Analisando propostas' },
    { numero: 'COT-1236', item: 'Caixas de papelão', quantidade: '1000 unid.', prazo: '20/07/2023', status: 'Concluída' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Compras</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/compras/fornecedores')}>
            Fornecedores
          </Button>
          <Button onClick={() => navigate('/modules/compras/cotacoes')}>
            Cotações
          </Button>
          <Button onClick={() => navigate('/modules/compras/pedidos')}>
            Pedidos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Compras (Mês)" 
          value="R$ 320.450,00" 
          change={{ value: "8%", positive: true }} 
          icon={DollarSign}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Economia Gerada" 
          value="R$ 42.800,00" 
          change={{ value: "12%", positive: true }} 
          icon={TrendingDown}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Tempo Médio de Compra" 
          value="5,2 dias" 
          change={{ value: "0,8 dia", positive: true }} 
          icon={Clock}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Fornecedores Ativos" 
          value="38" 
          change={{ value: "3", positive: true }} 
          icon={Users}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Compras Mensais" 
          type="line" 
          data={comprasMensaisData} 
        />
        <ChartCard 
          title="Compras por Categoria" 
          type="pie" 
          data={comprasPorCategoriaData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Pedidos de Compra"
          columns={[
            { key: 'numero', header: 'Número' },
            { key: 'fornecedor', header: 'Fornecedor' },
            { key: 'valor', header: 'Valor' },
            { key: 'emissao', header: 'Emissão' },
            { key: 'entrega', header: 'Entrega' },
            { key: 'status', header: 'Status' }
          ]}
          data={pedidosCompraData}
          statusColumn="status"
          statusStyles={{
            'aprovado': 'bg-green-100 text-green-800 hover:bg-green-200',
            'aguardando aprovação': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'em cotação': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
          }}
        />
        
        <TableCard 
          title="Cotações em Andamento"
          columns={[
            { key: 'numero', header: 'Número' },
            { key: 'item', header: 'Item' },
            { key: 'quantidade', header: 'Quantidade' },
            { key: 'prazo', header: 'Prazo' },
            { key: 'status', header: 'Status' }
          ]}
          data={cotacoesData}
          statusColumn="status"
        />
      </div>
    </div>
  );
};

export default ComprasPage;
