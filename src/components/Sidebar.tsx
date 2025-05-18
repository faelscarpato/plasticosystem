
import React, { useState } from 'react';
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
  FileText
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, collapsed, onClick }: NavItemProps) => {
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
  const [activeModule, setActiveModule] = useState('dashboard');

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
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active={activeModule === 'dashboard'}
          collapsed={collapsed}
          onClick={() => setActiveModule('dashboard')}
        />
        <NavItem
          icon={<ShoppingCart size={20} />}
          label="Vendas"
          active={activeModule === 'sales'}
          collapsed={collapsed}
          onClick={() => setActiveModule('sales')}
        />
        <NavItem
          icon={<FileText size={20} />}
          label="Engenharia"
          active={activeModule === 'engineering'}
          collapsed={collapsed}
          onClick={() => setActiveModule('engineering')}
        />
        <NavItem
          icon={<Package size={20} />}
          label="Compras"
          active={activeModule === 'purchases'}
          collapsed={collapsed}
          onClick={() => setActiveModule('purchases')}
        />
        <NavItem
          icon={<Layers size={20} />}
          label="Estoque"
          active={activeModule === 'stock'}
          collapsed={collapsed}
          onClick={() => setActiveModule('stock')}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="PCP"
          active={activeModule === 'pcp'}
          collapsed={collapsed}
          onClick={() => setActiveModule('pcp')}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Produção"
          active={activeModule === 'production'}
          collapsed={collapsed}
          onClick={() => setActiveModule('production')}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Qualidade"
          active={activeModule === 'quality'}
          collapsed={collapsed}
          onClick={() => setActiveModule('quality')}
        />
        <NavItem
          icon={<Wrench size={20} />}
          label="Manutenção"
          active={activeModule === 'maintenance'}
          collapsed={collapsed}
          onClick={() => setActiveModule('maintenance')}
        />
        <NavItem
          icon={<Truck size={20} />}
          label="Logística"
          active={activeModule === 'logistics'}
          collapsed={collapsed}
          onClick={() => setActiveModule('logistics')}
        />
        <NavItem
          icon={<DollarSign size={20} />}
          label="Financeiro"
          active={activeModule === 'financial'}
          collapsed={collapsed}
          onClick={() => setActiveModule('financial')}
        />
        <NavItem
          icon={<Users size={20} />}
          label="RH"
          active={activeModule === 'hr'}
          collapsed={collapsed}
          onClick={() => setActiveModule('hr')}
        />
      </div>

      <div className="p-2 border-t border-sidebar-border">
        <NavItem
          icon={<Settings size={20} />}
          label="Configurações"
          active={activeModule === 'settings'}
          collapsed={collapsed}
          onClick={() => setActiveModule('settings')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
