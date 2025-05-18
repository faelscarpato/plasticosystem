
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="h-16 border-b flex items-center justify-between px-6 bg-background">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            className="pl-8"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              <NotificationItem 
                title="Pedido Pendente" 
                message="Novo pedido #12345 requer aprovação"
                time="5 min atrás"
                type="alert" 
              />
              <NotificationItem 
                title="Nível de Estoque" 
                message="O material PVC-001 está abaixo do estoque mínimo"
                time="30 min atrás"
                type="warning" 
              />
              <NotificationItem 
                title="Manutenção Preventiva" 
                message="Agendada manutenção para a máquina M003"
                time="2 horas atrás"
                type="info" 
              />
              <NotificationItem 
                title="Meta Atingida" 
                message="Meta de produção de julho foi alcançada!"
                time="5 horas atrás"
                type="success" 
              />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center text-center">
              Ver todas as notificações
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative flex items-center gap-2" size="sm">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-intranet-800 text-white">JD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline-block">João Silva</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Perfil</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'alert' | 'success';
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, message, time, type }) => {
  const bgColors = {
    info: 'bg-blue-100',
    warning: 'bg-amber-100',
    alert: 'bg-red-100',
    success: 'bg-green-100',
  };
  
  const iconColors = {
    info: 'text-blue-500',
    warning: 'text-amber-500',
    alert: 'text-red-500',
    success: 'text-green-500',
  };
  
  return (
    <div className="p-3 hover:bg-muted/50 cursor-pointer">
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full ${bgColors[type]} flex items-center justify-center ${iconColors[type]}`}>
          {type === 'info' && <Bell size={16} />}
          {type === 'warning' && <Bell size={16} />}
          {type === 'alert' && <Bell size={16} />}
          {type === 'success' && <Bell size={16} />}
        </div>
        <div className="flex-1">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{message}</div>
          <div className="text-xs text-muted-foreground mt-1">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
