
import React from 'react';
import ModuleLayout from '../ModuleLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Clock, Calendar, TrendingUp } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const ProjetosPage = () => {
  const projetos = [
    {
      id: 'PRJ-001',
      nome: 'Redesenho Peça X',
      cliente: 'Autopeças ABC',
      responsavel: 'Ana Silva',
      prazo: '15/08/2023',
      progresso: 75,
      status: 'Em andamento'
    },
    {
      id: 'PRJ-002',
      nome: 'Novo Produto Y',
      cliente: 'Eletro Tech',
      responsavel: 'Carlos Santos',
      prazo: '30/09/2023',
      progresso: 40,
      status: 'Em andamento'
    },
    {
      id: 'PRJ-003',
      nome: 'Otimização Processo Z',
      cliente: 'Interno',
      responsavel: 'Mariana Costa',
      prazo: '10/08/2023',
      progresso: 25,
      status: 'Atrasado'
    },
    {
      id: 'PRJ-004',
      nome: 'Revisão Técnica W',
      cliente: 'Plast Ind',
      responsavel: 'Paulo Mendes',
      prazo: '05/09/2023',
      progresso: 60,
      status: 'Em andamento'
    },
    {
      id: 'PRJ-005',
      nome: 'Melhoria Conectores',
      cliente: 'Eletrônicos XYZ',
      responsavel: 'Roberta Alves',
      prazo: '20/07/2023',
      progresso: 90,
      status: 'Em finalização'
    },
  ];

  const tarefas = [
    {
      id: 'TSK-001',
      projeto: 'PRJ-001',
      descricao: 'Análise de material alternativo',
      responsavel: 'Roberto Silva',
      prazo: '05/08/2023',
      status: 'Em andamento'
    },
    {
      id: 'TSK-002',
      projeto: 'PRJ-001',
      descricao: 'Teste de resistência',
      responsavel: 'Ana Silva',
      prazo: '10/08/2023',
      status: 'Pendente'
    },
    {
      id: 'TSK-003',
      projeto: 'PRJ-002',
      descricao: 'Estudo de viabilidade',
      responsavel: 'Carlos Santos',
      prazo: '15/08/2023',
      status: 'Concluído'
    },
    {
      id: 'TSK-004',
      projeto: 'PRJ-003',
      descricao: 'Mapeamento de processo',
      responsavel: 'Mariana Costa',
      prazo: '05/08/2023',
      status: 'Atrasado'
    },
    {
      id: 'TSK-005',
      projeto: 'PRJ-004',
      descricao: 'Revisão dimensional',
      responsavel: 'Paulo Mendes',
      prazo: '20/08/2023',
      status: 'Em andamento'
    },
  ];

  return (
    <ModuleLayout title="Gestão de Projetos">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Gestão de Projetos</h2>
          <div className="space-x-2">
            <Button>Novo Projeto</Button>
            <Button variant="outline">Dashboard</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Projetos Ativos" 
            value="12" 
            change={{ value: "2", positive: true }} 
            icon={FileText}
            color="bg-intranet-900"
          />
          
          <StatCard 
            title="Tempo Médio Desenvolvimento" 
            value="45 dias" 
            change={{ value: "5 dias", positive: true }} 
            icon={Calendar}
            color="bg-intranet-800"
          />
          
          <StatCard 
            title="Projetos no Prazo" 
            value="85%" 
            change={{ value: "3%", positive: true }} 
            icon={Clock}
            color="bg-intranet-700"
          />
          
          <StatCard 
            title="Taxa de Sucesso" 
            value="92%" 
            change={{ value: "4%", positive: true }} 
            icon={TrendingUp}
            color="bg-intranet-600"
          />
        </div>

        <Tabs defaultValue="lista" className="w-full">
          <TabsList>
            <TabsTrigger value="lista">Lista de Projetos</TabsTrigger>
            <TabsTrigger value="tarefas">Tarefas</TabsTrigger>
            <TabsTrigger value="gantt">Cronograma</TabsTrigger>
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Projetos em Andamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar projetos..." className="pl-8" />
                    <div className="absolute left-2 top-2.5">🔍</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Filtrar</Button>
                    <Button variant="outline" size="sm">Exportar</Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Responsável</TableHead>
                      <TableHead>Prazo</TableHead>
                      <TableHead>Progresso</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projetos.map((projeto) => (
                      <TableRow key={projeto.id}>
                        <TableCell>{projeto.id}</TableCell>
                        <TableCell>{projeto.nome}</TableCell>
                        <TableCell>{projeto.cliente}</TableCell>
                        <TableCell>{projeto.responsavel}</TableCell>
                        <TableCell>{projeto.prazo}</TableCell>
                        <TableCell>
                          <div className="w-full flex items-center gap-2">
                            <Progress value={projeto.progresso} className="h-2 flex-1" />
                            <span className="text-xs font-medium">{projeto.progresso}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${
                            projeto.status === 'Em andamento' 
                              ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                              : projeto.status === 'Atrasado' 
                                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                                : projeto.status === 'Em finalização'
                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                  : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}>
                            {projeto.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Ver</Button>
                          <Button variant="ghost" size="sm">Editar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tarefas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tarefas de Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar tarefas..." className="pl-8" />
                    <div className="absolute left-2 top-2.5">🔍</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Filtrar</Button>
                    <Button variant="outline" size="sm">Nova Tarefa</Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Projeto</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Responsável</TableHead>
                      <TableHead>Prazo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tarefas.map((tarefa) => (
                      <TableRow key={tarefa.id}>
                        <TableCell>{tarefa.id}</TableCell>
                        <TableCell>{tarefa.projeto}</TableCell>
                        <TableCell>{tarefa.descricao}</TableCell>
                        <TableCell>{tarefa.responsavel}</TableCell>
                        <TableCell>{tarefa.prazo}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${
                            tarefa.status === 'Em andamento' 
                              ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                              : tarefa.status === 'Atrasado' 
                                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                                : tarefa.status === 'Pendente'
                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                  : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}>
                            {tarefa.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm">Concluir</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gantt" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Cronograma de Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Gráfico de Gantt</h3>
                  <p className="text-muted-foreground">
                    O gráfico de Gantt dos projetos será exibido aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recursos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Alocação de Recursos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Recursos por Projeto</h3>
                  <p className="text-muted-foreground">
                    A visualização de alocação de recursos será exibida aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ModuleLayout>
  );
};

export default ProjetosPage;
