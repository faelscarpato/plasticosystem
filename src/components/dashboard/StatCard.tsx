
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    positive?: boolean;
  };
  icon?: LucideIcon;
  color?: string;
  className?: string;
}

const StatCard = ({ title, value, change, icon: Icon, color = "bg-intranet-900", className }: StatCardProps) => {
  return (
    <Card className={cn("card-hover overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            {change && (
              <p className={cn("text-sm flex items-center gap-1 mt-1", 
                change.positive ? "text-green-600" : "text-red-600"
              )}>
                {change.positive ? "+" : ""}{change.value}
                <span className="text-xs">vs período anterior</span>
              </p>
            )}
          </div>
          
          {Icon && (
            <div className={cn("p-2 rounded-md", color)}>
              <Icon className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
