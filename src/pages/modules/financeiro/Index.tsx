
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowDown, 
  ArrowUp, 
  BarChart 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const FinanceiroPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const receitaDespesaData = [
    { name: 'Jan', receita: 1250000, despesa: 980000 },
    { name: 'Fev', receita: 1320000, despesa: 1050000 },
    { name: 'Mar', receita: 1180000, despesa: 940000 },
    { name: 'Abr', receita: 1350000, despesa: 1020000 },
    { name: 'Mai', receita: 1420000, despesa: 1080000 },
    { name: 'Jun', receita: 1380000, despesa: 1040000 },
  ];

  const composicaoCustosData = [
    { name: 'Matéria-Prima', valor: 48 },
    { name: 'Mão de Obra', valor: 25 },
    { name: 'Energia', valor: 12 },
    { name: 'Manutenção', valor: 8 },
    { name: 'Outros', valor: 7 },
  ];

  // Dados de exemplo para as tabelas
  const contasReceberData = [
    { cliente: 'Empresa A', nota: 'NF-12345', valor: 'R$ 45.600,00', emissao: '01/07/2023', vencimento: '31/07/2023', status: 'A vencer' },
    { cliente: 'Empresa B', nota: 'NF-12320', valor: 'R$ 32.800,00', emissao: '28/06/2023', vencimento: '28/07/2023', status: 'A vencer' },
    { cliente: 'Empresa C', nota: 'NF-12310', valor: 'R$ 18.900,00', emissao: '20/06/2023', vencimento: '20/07/2023', status: 'A vencer' },
    { cliente: 'Empresa D', nota: 'NF-12300', valor: 'R$ 27.300,00', emissao: '15/06/2023', vencimento: '15/07/2023', status: 'Atrasado' },
  ];

  const contasPagarData = [
    { fornecedor: 'Resinas Brasil', documento: 'NF-5678', valor: 'R$ 45.600,00', emissao: '05/07/2023', vencimento: '04/08/2023', status: 'A vencer' },
    { fornecedor: 'PetroChem', documento: 'NF-5640', valor: 'R$ 32.800,00', emissao: '01/07/2023', vencimento: '31/07/2023', status: 'A vencer' },
    { fornecedor: 'Energia Sul', documento: 'NF-5620', valor: 'R$ 28.900,00', emissao: '30/06/2023', vencimento: '15/07/2023', status: 'A vencer' },
    { fornecedor: 'MaquiPeças', documento: 'NF-5600', valor: 'R$ 12.300,00', emissao: '28/06/2023', vencimento: '13/07/2023', status: 'A vencer' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão Financeira</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/financeiro/contas-receber')}>
            Contas a Receber
          </Button>
          <Button onClick={() => navigate('/modules/financeiro/contas-pagar')}>
            Contas a Pagar
          </Button>
          <Button onClick={() => navigate('/modules/financeiro/fluxo-caixa')}>
            Fluxo de Caixa
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Faturamento Mensal" 
          value="R$ 1.380.000,00" 
          change={{ value: "4%", positive: false }} 
          icon={DollarSign}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Lucratividade" 
          value="24,6%" 
          change={{ value: "1,2%", positive: true }} 
          icon={TrendingUp}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Contas a Receber" 
          value="R$ 820.000,00" 
          change={{ value: "5%", positive: true }} 
          icon={ArrowDown}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Contas a Pagar" 
          value="R$ 650.000,00" 
          change={{ value: "3%", positive: false }} 
          icon={ArrowUp}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Receita vs Despesa" 
          type="line" 
          data={receitaDespesaData} 
        />
        <ChartCard 
          title="Composição de Custos" 
          type="pie" 
          data={composicaoCustosData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Contas a Receber"
          columns={[
            { key: 'cliente', header: 'Cliente' },
            { key: 'nota', header: 'Nota' },
            { key: 'valor', header: 'Valor' },
            { key: 'emissao', header: 'Emissão' },
            { key: 'vencimento', header: 'Vencimento' },
            { key: 'status', header: 'Status' }
          ]}
          data={contasReceberData}
          statusColumn="status"
          statusStyles={{
            'a vencer': 'bg-green-100 text-green-800 hover:bg-green-200',
            'atrasado': 'bg-red-100 text-red-800 hover:bg-red-200',
            'pago': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
          }}
        />
        
        <TableCard 
          title="Contas a Pagar"
          columns={[
            { key: 'fornecedor', header: 'Fornecedor' },
            { key: 'documento', header: 'Documento' },
            { key: 'valor', header: 'Valor' },
            { key: 'emissao', header: 'Emissão' },
            { key: 'vencimento', header: 'Vencimento' },
            { key: 'status', header: 'Status' }
          ]}
          data={contasPagarData}
          statusColumn="status"
          statusStyles={{
            'a vencer': 'bg-green-100 text-green-800 hover:bg-green-200',
            'atrasado': 'bg-red-100 text-red-800 hover:bg-red-200',
            'pago': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
          }}
        />
      </div>
    </div>
  );
};

export default FinanceiroPage;
