
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  FileText, 
  TrendingUp 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const VendasPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const revenueData = [
    { name: 'Jan', valor: 1200, meta: 1000 },
    { name: 'Fev', valor: 1900, meta: 1100 },
    { name: 'Mar', valor: 1300, meta: 1200 },
    { name: 'Abr', valor: 1500, meta: 1300 },
    { name: 'Mai', valor: 1800, meta: 1400 },
    { name: 'Jun', valor: 2000, meta: 1500 },
  ];

  const clientesData = [
    { name: 'Automotivo', valor: 40 },
    { name: 'Eletrodomésticos', valor: 30 },
    { name: 'Construção', valor: 20 },
    { name: 'Outros', valor: 10 },
  ];

  // Dados de exemplo para as tabelas
  const pedidosData = [
    { id: '#1234', cliente: 'Empresa A', valor: 'R$ 12.500,00', data: '15/07/2023', status: 'Concluído' },
    { id: '#1235', cliente: 'Empresa B', valor: 'R$ 8.300,00', data: '16/07/2023', status: 'Em andamento' },
    { id: '#1236', cliente: 'Empresa C', valor: 'R$ 15.200,00', data: '17/07/2023', status: 'Pendente' },
    { id: '#1237', cliente: 'Empresa D', valor: 'R$ 5.100,00', data: '18/07/2023', status: 'Atrasado' },
    { id: '#1238', cliente: 'Empresa E', valor: 'R$ 9.700,00', data: '19/07/2023', status: 'Concluído' },
  ];

  const clientesRecentesData = [
    { empresa: 'NovaTech Ltda.', contato: 'Carlos Silva', telefone: '(11) 98765-4321', email: 'carlos@novatech.com', status: 'Ativo' },
    { empresa: 'PlastForm S.A.', contato: 'Ana Costa', telefone: '(21) 91234-5678', email: 'ana@plastform.com', status: 'Prospect' },
    { empresa: 'EcoPlast Ind.', contato: 'Roberto Alves', telefone: '(31) 97654-3210', email: 'roberto@ecoplast.com', status: 'Ativo' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Vendas</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/vendas/clientes')}>
            Clientes
          </Button>
          <Button onClick={() => navigate('/modules/vendas/propostas')}>
            Propostas
          </Button>
          <Button onClick={() => navigate('/modules/vendas/pedidos')}>
            Pedidos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Faturamento Mensal" 
          value="R$ 567.890,00" 
          change={{ value: "12%", positive: true }} 
          icon={DollarSign}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Novos Clientes" 
          value="8" 
          change={{ value: "3", positive: true }} 
          icon={Users}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Conversão de Propostas" 
          value="68%" 
          change={{ value: "5%", positive: true }} 
          icon={TrendingUp}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Pedidos no Mês" 
          value="42" 
          change={{ value: "7", positive: true }} 
          icon={ShoppingCart}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Receita x Meta (últimos 6 meses)" 
          type="line" 
          data={revenueData} 
        />
        <ChartCard 
          title="Clientes por Segmento" 
          type="pie" 
          data={clientesData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Últimos Pedidos"
          columns={[
            { key: 'id', header: 'ID' },
            { key: 'cliente', header: 'Cliente' },
            { key: 'valor', header: 'Valor' },
            { key: 'data', header: 'Data' },
            { key: 'status', header: 'Status' }
          ]}
          data={pedidosData}
          statusColumn="status"
        />
        
        <TableCard 
          title="Clientes Recentes"
          columns={[
            { key: 'empresa', header: 'Empresa' },
            { key: 'contato', header: 'Contato' },
            { key: 'telefone', header: 'Telefone' },
            { key: 'email', header: 'Email' },
            { key: 'status', header: 'Status' }
          ]}
          data={clientesRecentesData}
          statusColumn="status"
          statusStyles={{
            'ativo': 'bg-green-100 text-green-800 hover:bg-green-200',
            'prospect': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'inativo': 'bg-red-100 text-red-800 hover:bg-red-200',
          }}
        />
      </div>
    </div>
  );
};

export default VendasPage;
