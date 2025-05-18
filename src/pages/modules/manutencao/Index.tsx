
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wrench, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  BarChart 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const ManutencaoPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const indicadoresData = [
    { name: 'Jan', mtbf: 120, mttr: 2.8 },
    { name: 'Fev', mtbf: 115, mttr: 3.2 },
    { name: 'Mar', mtbf: 130, mttr: 2.5 },
    { name: 'Abr', mtbf: 125, mttr: 2.7 },
    { name: 'Mai', mtbf: 135, mttr: 2.3 },
    { name: 'Jun', mtbf: 140, mttr: 2.1 },
  ];

  const tiposManutencaoData = [
    { name: 'Preventiva', valor: 45 },
    { name: 'Corretiva', valor: 30 },
    { name: 'Preditiva', valor: 15 },
    { name: 'Melhoria', valor: 10 },
  ];

  // Dados de exemplo para as tabelas
  const ordensManutencaoData = [
    { numero: 'OM-456', equipamento: 'Injetora 02', tipo: 'Corretiva', prioridade: 'Alta', solicitante: 'Pedro Costa', status: 'Em execução' },
    { numero: 'OM-457', equipamento: 'Extrusora 01', tipo: 'Preventiva', prioridade: 'Média', solicitante: 'Ana Oliveira', status: 'Programada' },
    { numero: 'OM-458', equipamento: 'Compressor 03', tipo: 'Corretiva', prioridade: 'Alta', solicitante: 'João Silva', status: 'Aguardando peça' },
    { numero: 'OM-459', equipamento: 'Injetora 01', tipo: 'Preventiva', prioridade: 'Baixa', solicitante: 'Maria Santos', status: 'Programada' },
  ];

  const manutencoesProgramadasData = [
    { equipamento: 'Extrusora 02', tipo: 'Preventiva', data: '20/07/2023', responsavel: 'Carlos Souza', duracao: '4h' },
    { equipamento: 'Injetora 03', tipo: 'Preventiva', data: '21/07/2023', responsavel: 'Rafael Lima', duracao: '3h' },
    { equipamento: 'Misturador 01', tipo: 'Preventiva', data: '22/07/2023', responsavel: 'André Souza', duracao: '2h' },
    { equipamento: 'Resfriador 02', tipo: 'Preditiva', data: '23/07/2023', responsavel: 'Paulo Mendes', duracao: '3h' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão da Manutenção</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/manutencao/ordens')}>
            Ordens
          </Button>
          <Button onClick={() => navigate('/modules/manutencao/equipamentos')}>
            Equipamentos
          </Button>
          <Button onClick={() => navigate('/modules/manutencao/preventivas')}>
            Preventivas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="MTBF" 
          value="140 horas" 
          change={{ value: "5 horas", positive: true }} 
          icon={Clock}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="MTTR" 
          value="2,1 horas" 
          change={{ value: "0,2 hora", positive: true }} 
          icon={Wrench}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Disponibilidade" 
          value="97,3%" 
          change={{ value: "0,5%", positive: true }} 
          icon={CheckCircle}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Ordens Abertas" 
          value="12" 
          change={{ value: "2", positive: false }} 
          icon={AlertTriangle}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="MTBF e MTTR" 
          type="line" 
          data={indicadoresData} 
        />
        <ChartCard 
          title="Tipos de Manutenção (%)" 
          type="pie" 
          data={tiposManutencaoData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Ordens de Manutenção"
          columns={[
            { key: 'numero', header: 'Número' },
            { key: 'equipamento', header: 'Equipamento' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'prioridade', header: 'Prioridade' },
            { key: 'solicitante', header: 'Solicitante' },
            { key: 'status', header: 'Status' }
          ]}
          data={ordensManutencaoData}
          statusColumn="status"
          statusStyles={{
            'em execução': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
            'programada': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
            'concluída': 'bg-green-100 text-green-800 hover:bg-green-200',
            'aguardando peça': 'bg-red-100 text-red-800 hover:bg-red-200',
          }}
        />
        
        <TableCard 
          title="Manutenções Programadas"
          columns={[
            { key: 'equipamento', header: 'Equipamento' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'data', header: 'Data' },
            { key: 'responsavel', header: 'Responsável' },
            { key: 'duracao', header: 'Duração' }
          ]}
          data={manutencoesProgramadasData}
        />
      </div>
    </div>
  );
};

export default ManutencaoPage;
