
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, 
  Calendar, 
  Clock,
  CheckCircle,
  XCircle 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ControlePresencaPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [funcionarios, setFuncionarios] = useState([]);
  const [presencas, setPresencas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Buscar funcionários
      const { data: funcionariosData, error: funcionariosError } = await supabase
        .from('funcionarios')
        .select('*');
        
      if (funcionariosError) throw funcionariosError;
      
      // Buscar registros de presença
      const { data: presencasData, error: presencasError } = await supabase
        .from('registros_presenca')
        .select('*, funcionario:funcionario_id(nome)');
        
      if (presencasError) throw presencasError;
      
      setFuncionarios(funcionariosData || []);
      setPresencas(presencasData || []);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast.error('Erro ao carregar dados de presença');
    } finally {
      setLoading(false);
    }
  };

  // Cálculos para estatísticas
  const hoje = new Date().toISOString().split('T')[0];
  const presencasHoje = presencas.filter(p => p.data === hoje);
  const presentes = presencasHoje.filter(p => p.status === 'presente').length;
  const ausentes = presencasHoje.filter(p => p.status === 'ausente').length;
  const totalFuncionarios = funcionarios.length;
  
  // Dados para tabela
  const presencasRecentesData = presencas.slice(0, 10).map(p => ({
    data: new Date(p.data).toLocaleDateString('pt-BR'),
    funcionario: p.funcionario?.nome || 'Desconhecido',
    status: p.status === 'presente' ? 'Presente' : 'Ausente',
    hora: new Date(p.created_at).toLocaleTimeString('pt-BR'),
  }));

  // Dados para gráficos
  const ultimosDiasData = [
    { name: 'Seg', presentes: 35, ausentes: 5 },
    { name: 'Ter', presentes: 37, ausentes: 3 },
    { name: 'Qua', presentes: 34, ausentes: 6 },
    { name: 'Qui', presentes: 38, ausentes: 2 },
    { name: 'Sex', presentes: presentes, ausentes: ausentes },
  ];

  const distribuicaoStatusData = [
    { name: 'Presentes', valor: presentes },
    { name: 'Ausentes', valor: ausentes },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Controle de Presença</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/controle-presenca/registrar')}>
            Registrar Presença
          </Button>
          <Button onClick={() => navigate('/modules/controle-presenca/relatorio')}>
            Relatórios
          </Button>
          <Button onClick={fetchData} variant="outline">
            Atualizar Dados
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total de Funcionários" 
          value={totalFuncionarios.toString()} 
          icon={Users}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Presentes Hoje" 
          value={presentes.toString()} 
          change={{ value: `${((presentes/totalFuncionarios)*100).toFixed(1)}%`, positive: true }} 
          icon={CheckCircle}
          color="bg-green-600"
        />
        
        <StatCard 
          title="Ausentes Hoje" 
          value={ausentes.toString()}
          change={{ value: `${((ausentes/totalFuncionarios)*100).toFixed(1)}%`, positive: false }} 
          icon={XCircle}
          color="bg-red-600"
        />
        
        <StatCard 
          title="Data Atual" 
          value={new Date().toLocaleDateString('pt-BR')} 
          icon={Calendar}
          color="bg-intranet-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Presença nos Últimos 5 Dias" 
          type="bar" 
          data={ultimosDiasData} 
        />
        <ChartCard 
          title="Distribuição de Presença Hoje" 
          type="pie" 
          data={distribuicaoStatusData} 
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <TableCard 
          title="Registros Recentes de Presença"
          columns={[
            { key: 'data', header: 'Data' },
            { key: 'funcionario', header: 'Funcionário' },
            { key: 'status', header: 'Status' },
            { key: 'hora', header: 'Hora do Registro' }
          ]}
          data={presencasRecentesData}
          statusColumn="status"
          statusStyles={{
            'presente': 'bg-green-100 text-green-800 hover:bg-green-200',
            'ausente': 'bg-red-100 text-red-800 hover:bg-red-200',
          }}
        />
      </div>
    </div>
  );
};

export default ControlePresencaPage;
