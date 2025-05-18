
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import SuperDashboard from '@/components/dashboard/SuperDashboard';
import { 
  ShoppingCart, 
  FileText, 
  Package, 
  Layers, 
  BarChart3, 
  Settings, 
  BarChart, 
  Wrench, 
  Truck, 
  DollarSign, 
  Users 
} from 'lucide-react';
import ModuleCard from '@/components/modules/ModuleCard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'main' | 'dashboard'>('dashboard');
  
  const modules = [
    { 
      title: 'Vendas', 
      description: 'Gestão de clientes, propostas e pedidos', 
      icon: ShoppingCart,
      color: 'bg-intranet-900'
    },
    { 
      title: 'Engenharia', 
      description: 'Projetos e especificações técnicas', 
      icon: FileText,
      color: 'bg-intranet-800'
    },
    { 
      title: 'Compras', 
      description: 'Gestão de fornecedores e pedidos', 
      icon: Package,
      color: 'bg-intranet-700'
    },
    { 
      title: 'Estoque', 
      description: 'Controle de materiais e produtos', 
      icon: Layers,
      color: 'bg-intranet-600'
    },
    { 
      title: 'PCP', 
      description: 'Planejamento e controle da produção', 
      icon: BarChart3,
      color: 'bg-intranet-900'
    },
    { 
      title: 'Produção', 
      description: 'Apontamentos e monitoramento', 
      icon: Settings,
      color: 'bg-intranet-800'
    },
    { 
      title: 'Qualidade', 
      description: 'Inspeções e não-conformidades', 
      icon: BarChart,
      color: 'bg-intranet-700'
    },
    { 
      title: 'Manutenção', 
      description: 'Preventiva, preditiva e corretiva', 
      icon: Wrench,
      color: 'bg-intranet-600'
    },
    { 
      title: 'Logística', 
      description: 'Expedição e entregas', 
      icon: Truck,
      color: 'bg-intranet-900'
    },
    { 
      title: 'Financeiro', 
      description: 'Contas, fluxo de caixa e custos', 
      icon: DollarSign,
      color: 'bg-intranet-800'
    },
    { 
      title: 'RH', 
      description: 'Gestão de pessoas e treinamentos', 
      icon: Users,
      color: 'bg-intranet-700'
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar title={currentView === 'dashboard' ? 'Super Dashboard' : 'Intranet PlasticPro'} />
        
        <div className="flex-1 overflow-y-auto">
          {currentView === 'dashboard' ? (
            <SuperDashboard />
          ) : (
            <div className="p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Módulos do Sistema</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {modules.map((module, index) => (
                  <ModuleCard
                    key={index}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                    color={module.color}
                    onClick={() => setCurrentView('dashboard')}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
