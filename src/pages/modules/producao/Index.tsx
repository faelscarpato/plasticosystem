
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, 
  BarChart3, 
  AlertCircle, 
  Clock, 
  Check 
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import TableCard from '@/components/dashboard/TableCard';
import { Button } from '@/components/ui/button';

const ProducaoPage = () => {
  const navigate = useNavigate();

  // Dados de exemplo para os gráficos
  const oeeData = [
    { name: 'Jan', valor: 82 },
    { name: 'Fev', valor: 79 },
    { name: 'Mar', valor: 85 },
    { name: 'Abr', valor: 81 },
    { name: 'Mai', valor: 84 },
    { name: 'Jun', valor: 86 },
  ];

  const paradasData = [
    { name: 'Setup', valor: 35 },
    { name: 'Quebra', valor: 25 },
    { name: 'Falta Material', valor: 20 },
    { name: 'Ajustes', valor: 12 },
    { name: 'Outros', valor: 8 },
  ];

  // Dados de exemplo para as tabelas
  const apontamentosData = [
    { hora: '14:00', maquina: 'Injetora 01', produto: 'Conector X-30', producao: '420 un', refugo: '12 un', operador: 'João Silva' },
    { hora: '13:00', maquina: 'Injetora 01', produto: 'Conector X-30', producao: '415 un', refugo: '8 un', operador: 'João Silva' },
    { hora: '14:00', maquina: 'Extrusora 01', produto: 'Mangueira W-40', producao: '320 m', refugo: '15 m', operador: 'Maria Santos' },
    { hora: '13:00', maquina: 'Extrusora 01', produto: 'Mangueira W-40', producao: '310 m', refugo: '10 m', operador: 'Maria Santos' },
  ];

  const paradasRegistradasData = [
    { inicio: '12:30', fim: '13:15', maquina: 'Injetora 02', tipo: 'Setup', motivo: 'Troca de molde', operador: 'Pedro Costa' },
    { inicio: '14:10', fim: '14:40', maquina: 'Extrusora 02', tipo: 'Quebra', motivo: 'Queima de resistência', operador: 'Ana Oliveira' },
    { inicio: '11:20', fim: '11:45', maquina: 'Injetora 03', tipo: 'Ajustes', motivo: 'Ajuste de parâmetros', operador: 'Carlos Souza' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão da Produção</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/producao/apontamentos')}>
            Apontamentos
          </Button>
          <Button onClick={() => navigate('/modules/producao/eficiencia')}>
            Eficiência
          </Button>
          <Button onClick={() => navigate('/modules/producao/paradas')}>
            Paradas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="OEE Global" 
          value="86%" 
          change={{ value: "2%", positive: true }} 
          icon={BarChart3}
          color="bg-intranet-900"
        />
        
        <StatCard 
          title="Produtividade" 
          value="92%" 
          change={{ value: "3%", positive: true }} 
          icon={Check}
          color="bg-intranet-800"
        />
        
        <StatCard 
          title="Taxa de Refugo" 
          value="2,8%" 
          change={{ value: "0,3%", positive: true }} 
          icon={AlertCircle}
          color="bg-intranet-700"
        />
        
        <StatCard 
          title="Tempo de Paradas" 
          value="4,2h" 
          change={{ value: "0,8h", positive: true }} 
          icon={Clock}
          color="bg-intranet-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="OEE Mensal (%)" 
          type="line" 
          data={oeeData} 
        />
        <ChartCard 
          title="Distribuição de Paradas (%)" 
          type="pie" 
          data={paradasData} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TableCard 
          title="Apontamentos Recentes"
          columns={[
            { key: 'hora', header: 'Hora' },
            { key: 'maquina', header: 'Máquina' },
            { key: 'produto', header: 'Produto' },
            { key: 'producao', header: 'Produção' },
            { key: 'refugo', header: 'Refugo' },
            { key: 'operador', header: 'Operador' }
          ]}
          data={apontamentosData}
        />
        
        <TableCard 
          title="Paradas Registradas"
          columns={[
            { key: 'inicio', header: 'Início' },
            { key: 'fim', header: 'Fim' },
            { key: 'maquina', header: 'Máquina' },
            { key: 'tipo', header: 'Tipo' },
            { key: 'motivo', header: 'Motivo' },
            { key: 'operador', header: 'Operador' }
          ]}
          data={paradasRegistradasData}
        />
      </div>
    </div>
  );
};

export default ProducaoPage;
