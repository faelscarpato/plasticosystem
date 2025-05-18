
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TableCardProps {
  title: string;
  columns: {
    key: string;
    header: string;
    className?: string;
  }[];
  data: Record<string, any>[];
  statusColumn?: string;
  statusStyles?: Record<string, string>;
  className?: string;
}

const TableCard: React.FC<TableCardProps> = ({ 
  title, 
  columns, 
  data, 
  statusColumn,
  statusStyles = {
    'pendente': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    'em andamento': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'concluído': 'bg-green-100 text-green-800 hover:bg-green-200',
    'atrasado': 'bg-red-100 text-red-800 hover:bg-red-200'
  },
  className 
}) => {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto max-h-80">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className={column.className}>
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/50">
                  {columns.map((column) => (
                    <TableCell key={`${i}-${column.key}`} className={column.className}>
                      {statusColumn && column.key === statusColumn ? (
                        <Badge 
                          className={cn(
                            "font-normal",
                            statusStyles[row[column.key].toLowerCase()]
                          )}
                        >
                          {row[column.key]}
                        </Badge>
                      ) : (
                        row[column.key]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TableCard;
