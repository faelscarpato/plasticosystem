
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
  className?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  onClick,
  className 
}) => {
  return (
    <Card 
      className={cn(
        "card-hover cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 flex items-center gap-4">
        <div className={cn("p-3 rounded-md", color)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
