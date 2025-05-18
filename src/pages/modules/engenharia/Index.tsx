
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Settings, 
  Calendar, 
  TrendingUp, 
  Lightbulb 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const EngenhariaPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const projetosData = [
    { name: 'Jan', valor: 3 },
    { name: 'Fev', valor: 5 },
    { name: 'Mar', valor: 2 },
    { name: 'Abr', valor: 6 },
    { name: 'Mai', valor: 4 },
    { name: 'Jun', valor: 8 },
  ];

  const distribuicaoProjetosData = [
    { name: 'Novos Produtos', valor: 40 },
    { name: 'Melhorias', valor: 35 },
    { name: 'Suporte Técnico', valor: 25 },
  ];

  // Dados de exemplo para as tabelas
  const projetosAtivosData = [
    { codigo: 'PRJ-001', nome: 'Redesenho Peça X', responsavel: 'Ana Silva', prazo: '15/08/2023', status: 'Em andamento' },
    { codigo: 'PRJ-002', nome: 'Novo Produto Y', responsavel: 'Carlos Santos', prazo: '30/09/2023', status: 'Em andamento' },
    { codigo: 'PRJ-003', nome: 'Otimização Processo Z', responsavel: 'Mariana Costa', prazo: '10/08/2023', status: 'Atrasado' },
    { codigo: 'PRJ-004', nome: 'Revisão Técnica W', responsavel: 'Paulo Mendes', prazo: '05/09/2023', status: 'Em andamento' },
  ];

  const especificacoesData = [
    { codigo: 'ESP-120', produto: 'Conector Tipo A', versao: '2.3', responsavel: 'Ricardo Gomes', atualizacao: '05/07/2023' },
    { codigo: 'ESP-121', produto: 'Válvula B-200', versao: '1.0', responsavel: 'Camila Rocha', atualizacao: '12/07/2023' },
    { codigo: 'ESP-122', produto: 'Engrenagem C30', versao: '3.1', responsavel: 'Fernando Silva', atualizacao: '20/07/2023' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Engenharia</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/engenharia/projetos')}>
            Projetos
          </Button>
          <Button onClick={() => navigate('/modules/engenharia/especificacoes')}>
            Especificações
          </Button>
          <Button onClick={() => navigate('/modules/engenharia/desenhos')}>
            Desenhos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Projetos Ativos" 
          value="12" 
          change={{ value: "2", positive: true }} 
          icon={FileText}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Tempo Médio Desenvolvimento" 
          value="45 dias" 
          change={{ value: "5 dias", positive: true }} 
          icon={Calendar}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Suporte Técnico" 
          value="8 casos" 
          change={{ value: "2", positive: false }} 
          icon={Settings}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Melhorias Implementadas" 
          value="6" 
          change={{ value: "2", positive: true }} 
          icon={Lightbulb}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Projetos Iniciados por Mês" 
          type="bar" 
          data={projetosData} 
        />
        <ChartCard 
          title="Distribuição de Projetos" 
          type="pie" 
          data={distribuicaoProjetosData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Projetos Ativos"
          columns={[
            { key: 'codigo', header: 'Código' },
            { key: 'nome', header: 'Nome' },
            { key: 'responsavel', header: 'Responsável' },
            { key: 'prazo', header: 'Prazo' },
            { key: 'status', header: 'Status' }
          ]}
          data={projetosAtivosData}
          statusColumn="status"
        />
        
        <TableCard 
          title="Especificações Recentes"
          columns={[
            { key: 'codigo', header: 'Código' },
            { key: 'produto', header: 'Produto' },
            { key: 'versao', header: 'Versão' },
            { key: 'responsavel', header: 'Responsável' },
            { key: 'atualizacao', header: 'Atualização' }
          ]}
          data={especificacoesData}
        />
      </div>
    </div>
  );
};

export default EngenhariaPage;
