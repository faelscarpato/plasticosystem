
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layers, 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  BarChart 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const EstoquePage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const valorEstoqueData = [
    { name: 'Jan', valor: 580000 },
    { name: 'Fev', valor: 620000 },
    { name: 'Mar', valor: 590000 },
    { name: 'Abr', valor: 610000 },
    { name: 'Mai', valor: 650000 },
    { name: 'Jun', valor: 630000 },
  ];

  const composicaoEstoqueData = [
    { name: 'Matérias-Primas', valor: 55 },
    { name: 'Produtos Acabados', valor: 30 },
    { name: 'Embalagens', valor: 10 },
    { name: 'Insumos', valor: 5 },
  ];

  // Dados de exemplo para as tabelas
  const estoqueCriticoData = [
    { codigo: 'MP-001', material: 'PVC Granulado', atual: '120 kg', minimo: '150 kg', status: 'Crítico' },
    { codigo: 'MP-002', material: 'ABS Granulado', atual: '80 kg', minimo: '100 kg', status: 'Crítico' },
    { codigo: 'MP-003', material: 'Pigmento Azul', atual: '30 kg', minimo: '40 kg', status: 'Crítico' },
    { codigo: 'EMB-005', material: 'Caixas 30x20', atual: '350 un', minimo: '300 un', status: 'Normal' },
  ];

  const movimentacoesData = [
    { data: '15/07/2023', material: 'PP Granulado', tipo: 'Entrada', quantidade: '2000 kg', documento: 'NF-5678', usuario: 'Carlos Silva' },
    { data: '15/07/2023', material: 'Conector X-30', tipo: 'Saída', quantidade: '500 un', documento: 'OP-1234', usuario: 'Ana Costa' },
    { data: '14/07/2023', material: 'ABS Granulado', tipo: 'Entrada', quantidade: '1500 kg', documento: 'NF-5677', usuario: 'Carlos Silva' },
    { data: '14/07/2023', material: 'Válvulas Y-20', tipo: 'Saída', quantidade: '200 un', documento: 'OP-1233', usuario: 'Ana Costa' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Estoque</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/estoque/materiais')}>
            Materiais
          </Button>
          <Button onClick={() => navigate('/modules/estoque/movimentacoes')}>
            Movimentações
          </Button>
          <Button onClick={() => navigate('/modules/estoque/inventarios')}>
            Inventários
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Valor Total em Estoque" 
          value="R$ 630.000,00" 
          change={{ value: "3%", positive: false }} 
          icon={Package}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Giro de Estoque" 
          value="5,2" 
          change={{ value: "0,3", positive: true }} 
          icon={TrendingUp}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Acurácia do Inventário" 
          value="98,7%" 
          change={{ value: "0,5%", positive: true }} 
          icon={BarChart}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Itens em Estoque Crítico" 
          value="8" 
          change={{ value: "2", positive: false }} 
          icon={AlertTriangle}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Valor do Estoque (6 meses)" 
          type="line" 
          data={valorEstoqueData} 
        />
        <ChartCard 
          title="Composição do Estoque" 
          type="pie" 
          data={composicaoEstoqueData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Itens em Estoque Crítico"
          columns={[
            { key: 'codigo', header: 'Código' },
            { key: 'material', header: 'Material' },
            { key: 'atual', header: 'Atual' },
            { key: 'minimo', header: 'Mínimo' },
            { key: 'status', header: 'Status' }
          ]}
          data={estoqueCriticoData}
          statusColumn="status"
          statusStyles={{
            'crítico': 'bg-red-100 text-red-800 hover:bg-red-200',
            'alerta': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'normal': 'bg-green-100 text-green-800 hover:bg-green-200',
          }}
        />
        
        <TableCard 
          title="Últimas Movimentações"
          columns={[
            { key: 'data', header: 'Data' },
            { key: 'material', header: 'Material' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'quantidade', header: 'Quantidade' },
            { key: 'documento', header: 'Documento' },
            { key: 'usuario', header: 'Usuário' }
          ]}
          data={movimentacoesData}
        />
      </div>
    </div>
  );
};

export default EstoquePage;
