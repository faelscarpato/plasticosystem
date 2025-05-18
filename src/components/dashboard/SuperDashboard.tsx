
import React from 'react';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import TableCard from './TableCard';
import { 
  DollarSign, 
  Package, 
  TrendingUp, 
  Users, 
  Clock,
  AlertTriangle
} from 'lucide-react';

const SuperDashboard: React.FC = () => {
  // Dados de exemplo para os gráficos
  const revenueData = [
    { name: 'Jan', valor: 1200, meta: 1000 },
    { name: 'Fev', valor: 1900, meta: 1100 },
    { name: 'Mar', valor: 1300, meta: 1200 },
    { name: 'Abr', valor: 1500, meta: 1300 },
    { name: 'Mai', valor: 1800, meta: 1400 },
    { name: 'Jun', valor: 2000, meta: 1500 },
  ];

  const productionData = [
    { name: 'Linha 1', valor: 80 },
    { name: 'Linha 2', valor: 45 },
    { name: 'Linha 3', valor: 65 },
    { name: 'Linha 4', valor: 90 },
  ];

  const productMixData = [
    { name: 'PVC', valor: 40 },
    { name: 'ABS', valor: 30 },
    { name: 'PP', valor: 20 },
    { name: 'HDPE', valor: 10 },
  ];

  // Dados de exemplo para as tabelas
  const ordersData = [
    { id: '#1234', cliente: 'Empresa A', valor: 'R$ 12.500,00', data: '15/07/2023', status: 'Concluído' },
    { id: '#1235', cliente: 'Empresa B', valor: 'R$ 8.300,00', data: '16/07/2023', status: 'Em andamento' },
    { id: '#1236', cliente: 'Empresa C', valor: 'R$ 15.200,00', data: '17/07/2023', status: 'Pendente' },
    { id: '#1237', cliente: 'Empresa D', valor: 'R$ 5.100,00', data: '18/07/2023', status: 'Atrasado' },
    { id: '#1238', cliente: 'Empresa E', valor: 'R$ 9.700,00', data: '19/07/2023', status: 'Concluído' },
  ];

  const maintenanceData = [
    { equipamento: 'Máquina A', tipo: 'Preventiva', data: '25/07/2023', responsável: 'Carlos Silva', status: 'Pendente' },
    { equipamento: 'Máquina B', tipo: 'Corretiva', data: '23/07/2023', responsável: 'Ana Costa', status: 'Concluído' },
    { equipamento: 'Máquina C', tipo: 'Preditiva', data: '27/07/2023', responsável: 'Roberto Alves', status: 'Em andamento' },
    { equipamento: 'Máquina D', tipo: 'Preventiva', data: '22/07/2023', responsável: 'Paulo Santos', status: 'Atrasado' },
  ];

  const stockAlertData = [
    { codigo: 'MP-001', material: 'PVC Granulado', atual: '120 kg', minimo: '150 kg', status: 'Crítico' },
    { codigo: 'MP-002', material: 'ABS Granulado', atual: '80 kg', minimo: '100 kg', status: 'Crítico' },
    { codigo: 'MP-003', material: 'Pigmento Azul', atual: '30 kg', minimo: '40 kg', status: 'Crítico' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Faturamento Mensal" 
          value="R$ 1.256.450,00" 
          change={{ value: "12%", positive: true }} 
          icon={DollarSign}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Produção Mensal" 
          value="12.450 unidades" 
          change={{ value: "8%", positive: true }} 
          icon={Package}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Taxa de Entrega no Prazo" 
          value="92.5%" 
          change={{ value: "3%", positive: true }} 
          icon={TrendingUp}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Índice de Qualidade" 
          value="98.2%" 
          change={{ value: "0.5%", positive: false }} 
          icon={Users}
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
          title="Mix de Produtos (mês atual)" 
          type="pie" 
          data={productMixData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Performance da Produção por Linha" 
          type="bar" 
          data={productionData} 
        />
        
        <div className="space-y-6">
          <TableCard 
            title="Alertas de Estoque"
            columns={[
              { key: 'codigo', header: 'Código' },
              { key: 'material', header: 'Material' },
              { key: 'atual', header: 'Atual' },
              { key: 'minimo', header: 'Mínimo' },
              { key: 'status', header: 'Status', className: "text-right" }
            ]}
            data={stockAlertData}
            statusColumn="status"
            statusStyles={{
              'crítico': 'bg-red-100 text-red-800 hover:bg-red-200',
              'alerta': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
              'normal': 'bg-green-100 text-green-800 hover:bg-green-200',
            }}
          />

          <div className="flex gap-4">
            <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-md flex-1">
              <Clock className="text-amber-500 h-5 w-5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800">4 ordens em atraso</p>
                <p className="text-amber-600">Necessitam de atenção</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md flex-1">
              <AlertTriangle className="text-red-500 h-5 w-5" />
              <div className="text-sm">
                <p className="font-medium text-red-800">2 máquinas paradas</p>
                <p className="text-red-600">Manutenção urgente</p>
              </div>
            </div>
          </div>
        </div>
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
          data={ordersData}
          statusColumn="status"
        />
        
        <TableCard 
          title="Manutenções Programadas"
          columns={[
            { key: 'equipamento', header: 'Equipamento' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'data', header: 'Data' },
            { key: 'responsável', header: 'Responsável' },
            { key: 'status', header: 'Status' }
          ]}
          data={maintenanceData}
          statusColumn="status"
        />
      </div>
    </div>
  );
};

export default SuperDashboard;
