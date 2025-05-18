
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  TrendingUp 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const QualidadePage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const indicadorQualidadeData = [
    { name: 'Jan', valor: 97.8 },
    { name: 'Fev', valor: 98.2 },
    { name: 'Mar', valor: 97.5 },
    { name: 'Abr', valor: 98.0 },
    { name: 'Mai', valor: 98.4 },
    { name: 'Jun', valor: 98.6 },
  ];

  const tiposNaoConformidadeData = [
    { name: 'Dimensional', valor: 45 },
    { name: 'Visual', valor: 30 },
    { name: 'Funcional', valor: 15 },
    { name: 'Documentação', valor: 10 },
  ];

  // Dados de exemplo para as tabelas
  const naoConformidadesData = [
    { numero: 'NC-345', produto: 'Conector X-30', tipo: 'Dimensional', data: '12/07/2023', responsavel: 'Ana Oliveira', status: 'Em análise' },
    { numero: 'NC-346', produto: 'Válvula Y-20', tipo: 'Visual', data: '13/07/2023', responsavel: 'Carlos Souza', status: 'Concluída' },
    { numero: 'NC-347', produto: 'Mangueira W-40', tipo: 'Funcional', data: '14/07/2023', responsavel: 'Pedro Costa', status: 'Em tratamento' },
    { numero: 'NC-348', produto: 'Engrenagem Z-10', tipo: 'Dimensional', data: '15/07/2023', responsavel: 'Maria Santos', status: 'Em análise' },
  ];

  const inspecoesData = [
    { tipo: 'Recebimento', material: 'PVC Granulado', lote: 'MP-5678', data: '15/07/2023', inspetor: 'Rafael Lima', resultado: 'Aprovado' },
    { tipo: 'Processo', produto: 'Conector X-30', op: 'OP-1234', data: '15/07/2023', inspetor: 'Julia Martins', resultado: 'Aprovado' },
    { tipo: 'Final', produto: 'Válvula Y-20', op: 'OP-1233', data: '14/07/2023', inspetor: 'André Souza', resultado: 'Reprovado' },
    { tipo: 'Recebimento', material: 'Pigmento Azul', lote: 'MP-5677', data: '14/07/2023', inspetor: 'Rafael Lima', resultado: 'Aprovado' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão da Qualidade</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/qualidade/inspecoes')}>
            Inspeções
          </Button>
          <Button onClick={() => navigate('/modules/qualidade/nao-conformidades')}>
            Não Conformidades
          </Button>
          <Button onClick={() => navigate('/modules/qualidade/auditorias')}>
            Auditorias
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Índice de Qualidade" 
          value="98,6%" 
          change={{ value: "0,2%", positive: true }} 
          icon={CheckCircle}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Não Conformidades (mês)" 
          value="12" 
          change={{ value: "3", positive: true }} 
          icon={AlertTriangle}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Auditorias Realizadas" 
          value="5" 
          change={{ value: "1", positive: true }} 
          icon={FileText}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Custo da Não Qualidade" 
          value="R$ 12.300,00" 
          change={{ value: "R$ 2.400,00", positive: true }} 
          icon={TrendingUp}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Índice de Qualidade (%)" 
          type="line" 
          data={indicadorQualidadeData} 
        />
        <ChartCard 
          title="Tipos de Não Conformidade (%)" 
          type="pie" 
          data={tiposNaoConformidadeData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Não Conformidades Recentes"
          columns={[
            { key: 'numero', header: 'Número' },
            { key: 'produto', header: 'Produto' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'data', header: 'Data' },
            { key: 'responsavel', header: 'Responsável' },
            { key: 'status', header: 'Status' }
          ]}
          data={naoConformidadesData}
          statusColumn="status"
          statusStyles={{
            'em análise': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'em tratamento': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'concluída': 'bg-green-100 text-green-800 hover:bg-green-200',
          }}
        />
        
        <TableCard 
          title="Inspeções Realizadas"
          columns={[
            { key: 'tipo', header: 'Tipo' },
            { key: 'material', header: 'Material' },
            { key: 'lote', header: 'Lote/OP' },
            { key: 'data', header: 'Data' },
            { key: 'inspetor', header: 'Inspetor' },
            { key: 'resultado', header: 'Resultado' }
          ]}
          data={inspecoesData}
          statusColumn="resultado"
          statusStyles={{
            'aprovado': 'bg-green-100 text-green-800 hover:bg-green-200',
            'reprovado': 'bg-red-100 text-red-800 hover:bg-red-200',
            'parcial': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
          }}
        />
      </div>
    </div>
  );
};

export default QualidadePage;
