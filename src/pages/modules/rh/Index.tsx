
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Award, 
  UserCheck, 
  Clock,
  Calendar
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const RHPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const turnoverData = [
    { name: 'Jan', valor: 1.8 },
    { name: 'Fev', valor: 2.1 },
    { name: 'Mar', valor: 1.5 },
    { name: 'Abr', valor: 1.9 },
    { name: 'Mai', valor: 1.4 },
    { name: 'Jun', valor: 1.2 },
  ];

  const distribuicaoColaboradoresData = [
    { name: 'Produção', valor: 65 },
    { name: 'Administrativo', valor: 15 },
    { name: 'Comercial', valor: 10 },
    { name: 'Técnico', valor: 10 },
  ];

  // Dados de exemplo para as tabelas
  const vagasData = [
    { codigo: 'VAG-001', cargo: 'Operador de Injetora', departamento: 'Produção', abertura: '10/07/2023', status: 'Em seleção' },
    { codigo: 'VAG-002', cargo: 'Analista de Qualidade', departamento: 'Qualidade', abertura: '12/07/2023', status: 'Em seleção' },
    { codigo: 'VAG-003', cargo: 'Assistente Financeiro', departamento: 'Financeiro', abertura: '05/07/2023', status: 'Entrevistas' },
    { codigo: 'VAG-004', cargo: 'Técnico de Manutenção', departamento: 'Manutenção', abertura: '01/07/2023', status: 'Finalizada' },
  ];

  const treinamentosData = [
    { codigo: 'TRE-123', nome: 'NR-12 - Segurança em Máquinas', departamento: 'Produção', data: '25/07/2023', instrutor: 'Carlos Souza', status: 'Programado' },
    { codigo: 'TRE-124', nome: 'ISO 9001', departamento: 'Qualidade', data: '28/07/2023', instrutor: 'Ana Oliveira', status: 'Programado' },
    { codigo: 'TRE-125', nome: 'Gestão do Tempo', departamento: 'Administrativo', data: '14/07/2023', instrutor: 'Pedro Costa', status: 'Realizado' },
    { codigo: 'TRE-126', nome: 'Excel Avançado', departamento: 'Financeiro', data: '10/07/2023', instrutor: 'Maria Santos', status: 'Realizado' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Recursos Humanos</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/rh/colaboradores')}>
            Colaboradores
          </Button>
          <Button onClick={() => navigate('/modules/rh/recrutamento')}>
            Recrutamento
          </Button>
          <Button onClick={() => navigate('/modules/rh/treinamentos')}>
            Treinamentos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total de Colaboradores" 
          value="142" 
          change={{ value: "3", positive: true }} 
          icon={Users}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Turnover Mensal" 
          value="1,2%" 
          change={{ value: "0,2%", positive: true }} 
          icon={UserCheck}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Horas de Treinamento" 
          value="380h" 
          change={{ value: "45h", positive: true }} 
          icon={Clock}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Vagas Abertas" 
          value="6" 
          change={{ value: "2", positive: true }} 
          icon={Award}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Taxa de Turnover (%)" 
          type="line" 
          data={turnoverData} 
        />
        <ChartCard 
          title="Distribuição de Colaboradores" 
          type="pie" 
          data={distribuicaoColaboradoresData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Vagas em Aberto"
          columns={[
            { key: 'codigo', header: 'Código' },
            { key: 'cargo', header: 'Cargo' },
            { key: 'departamento', header: 'Departamento' },
            { key: 'abertura', header: 'Abertura' },
            { key: 'status', header: 'Status' }
          ]}
          data={vagasData}
          statusColumn="status"
          statusStyles={{
            'em seleção': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'entrevistas': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'finalizada': 'bg-green-100 text-green-800 hover:bg-green-200',
          }}
        />
        
        <TableCard 
          title="Próximos Treinamentos"
          columns={[
            { key: 'codigo', header: 'Código' },
            { key: 'nome', header: 'Nome' },
            { key: 'departamento', header: 'Departamento' },
            { key: 'data', header: 'Data' },
            { key: 'instrutor', header: 'Instrutor' },
            { key: 'status', header: 'Status' }
          ]}
          data={treinamentosData}
          statusColumn="status"
          statusStyles={{
            'programado': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'realizado': 'bg-green-100 text-green-800 hover:bg-green-200',
            'cancelado': 'bg-red-100 text-red-800 hover:bg-red-200',
          }}
        />
      </div>
    </div>
  );
};

export default RHPage;
