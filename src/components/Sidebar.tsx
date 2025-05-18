
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  Wrench, 
  BarChart3, 
  Layers, 
  Truck, 
  DollarSign, 
  ChevronLeft,
  ChevronRight,
  Settings,
  FileText,
  Calendar
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  path: string;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, collapsed, path, onClick }: NavItemProps) => {
  return (
    <button
      className={cn(
        'sidebar-link w-full text-left',
        active && 'active'
      )}
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determinar o módulo ativo com base na URL
  const getActiveModule = () => {
    const path = location.pathname;
    if (path === '/') {
      return 'dashboard';
    }
    // Extrair o nome do módulo da URL
    const match = path.match(/\/modules\/([^/]+)/);
    return match ? match[1] : 'dashboard';
  };

  const [activeModule, setActiveModule] = useState(getActiveModule());

  // Atualizar o módulo ativo quando a URL muda
  useEffect(() => {
    setActiveModule(getActiveModule());
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const modules = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { id: 'vendas', label: 'Vendas', icon: <ShoppingCart size={20} />, path: '/modules/vendas' },
    { id: 'engenharia', label: 'Engenharia', icon: <FileText size={20} />, path: '/modules/engenharia' },
    { id: 'compras', label: 'Compras', icon: <Package size={20} />, path: '/modules/compras' },
    { id: 'estoque', label: 'Estoque', icon: <Layers size={20} />, path: '/modules/estoque' },
    { id: 'pcp', label: 'PCP', icon: <BarChart3 size={20} />, path: '/modules/pcp' },
    { id: 'producao', label: 'Produção', icon: <Settings size={20} />, path: '/modules/producao' },
    { id: 'qualidade', label: 'Qualidade', icon: <BarChart3 size={20} />, path: '/modules/qualidade' },
    { id: 'manutencao', label: 'Manutenção', icon: <Wrench size={20} />, path: '/modules/manutencao' },
    { id: 'logistica', label: 'Logística', icon: <Truck size={20} />, path: '/modules/logistica' },
    { id: 'financeiro', label: 'Financeiro', icon: <DollarSign size={20} />, path: '/modules/financeiro' },
    { id: 'rh', label: 'RH', icon: <Users size={20} />, path: '/modules/rh' },
    { id: 'controle-presenca', label: 'Presença', icon: <Calendar size={20} />, path: '/modules/controle-presenca' }
  ];

  return (
    <div
      className={cn(
        'h-screen bg-sidebar flex flex-col border-r border-sidebar-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="text-xl font-bold text-sidebar-foreground">
            PlasticPro
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex flex-col gap-1 p-2 flex-1 overflow-y-auto scrollbar-hide">
        {modules.map(module => (
          <NavItem
            key={module.id}
            icon={module.icon}
            label={module.label}
            active={activeModule === module.id}
            collapsed={collapsed}
            path={module.path}
            onClick={() => handleNavigation(module.path)}
          />
        ))}
      </div>

      <div className="p-2 border-t border-sidebar-border">
        <NavItem
          icon={<Settings size={20} />}
          label="Configurações"
          active={activeModule === 'settings'}
          collapsed={collapsed}
          path="/settings"
          onClick={() => navigate('/settings')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
