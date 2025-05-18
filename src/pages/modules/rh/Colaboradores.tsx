
import React from 'react';
import ModuleLayout from '../ModuleLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart3, Calendar, Users, FileText } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';

const ColaboradoresPage = () => {
  const colaboradores = [
    { 
      id: '001', 
      nome: 'Carlos Silva', 
      cargo: 'Operador de Produção', 
      departamento: 'Produção', 
      admissao: '10/01/2020', 
      status: 'Ativo' 
    },
    { 
      id: '002', 
      nome: 'Ana Oliveira', 
      cargo: 'Analista de Qualidade', 
      departamento: 'Qualidade', 
      admissao: '15/03/2019', 
      status: 'Ativo' 
    },
    { 
      id: '003', 
      nome: 'Roberto Santos', 
      cargo: 'Engenheiro de Produto', 
      departamento: 'Engenharia', 
      admissao: '05/06/2021', 
      status: 'Ativo' 
    },
    { 
      id: '004', 
      nome: 'Patrícia Costa', 
      cargo: 'Técnico de Manutenção', 
      departamento: 'Manutenção', 
      admissao: '20/08/2018', 
      status: 'Licença' 
    },
    { 
      id: '005', 
      nome: 'Marcos Souza', 
      cargo: 'Supervisor de Produção', 
      departamento: 'Produção', 
      admissao: '12/04/2017', 
      status: 'Ativo' 
    },
    { 
      id: '006', 
      nome: 'Juliana Lima', 
      cargo: 'Analista Financeiro', 
      departamento: 'Financeiro', 
      admissao: '03/09/2020', 
      status: 'Ativo' 
    },
    { 
      id: '007', 
      nome: 'Fernando Gomes', 
      cargo: 'Vendedor Técnico', 
      departamento: 'Vendas', 
      admissao: '17/11/2019', 
      status: 'Férias' 
    },
  ];

  return (
    <ModuleLayout title="Gestão de Colaboradores">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Gestão de Colaboradores</h2>
          <div className="space-x-2">
            <Button>Novo Colaborador</Button>
            <Button variant="outline">Exportar Dados</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total de Colaboradores" 
            value="127" 
            change={{ value: "5", positive: true }} 
            icon={Users}
            color="bg-intranet-900"
          />
          
          <StatCard 
            title="Turnover Mensal" 
            value="2,4%" 
            change={{ value: "0,3%", positive: true }} 
            icon={BarChart3}
            color="bg-intranet-800"
          />
          
          <StatCard 
            title="Colaboradores em Férias" 
            value="8" 
            change={{ value: "2", positive: false }} 
            icon={Calendar}
            color="bg-intranet-700"
          />
          
          <StatCard 
            title="Horas de Treinamento" 
            value="450h" 
            change={{ value: "120h", positive: true }} 
            icon={FileText}
            color="bg-intranet-600"
          />
        </div>

        <Tabs defaultValue="lista" className="w-full">
          <TabsList>
            <TabsTrigger value="lista">Lista de Colaboradores</TabsTrigger>
            <TabsTrigger value="departamentos">Por Departamento</TabsTrigger>
            <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Colaboradores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar colaborador..." className="pl-8" />
                    <div className="absolute left-2 top-2.5">🔍</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Filtrar</Button>
                    <Button variant="outline" size="sm">Departamentos</Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Departamento</TableHead>
                      <TableHead>Admissão</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {colaboradores.map((colaborador) => (
                      <TableRow key={colaborador.id}>
                        <TableCell>{colaborador.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{colaborador.nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            {colaborador.nome}
                          </div>
                        </TableCell>
                        <TableCell>{colaborador.cargo}</TableCell>
                        <TableCell>{colaborador.departamento}</TableCell>
                        <TableCell>{colaborador.admissao}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            colaborador.status === 'Ativo' 
                              ? 'bg-green-100 text-green-800' 
                              : colaborador.status === 'Férias' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-amber-100 text-amber-800'
                          }`}>
                            {colaborador.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Perfil</Button>
                          <Button variant="ghost" size="sm">Editar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departamentos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Departamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Visualização por Departamento</h3>
                  <p className="text-muted-foreground">
                    O gráfico de distribuição por departamento será exibido aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="beneficios" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Benefícios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Plano de Saúde</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">127 colaboradores ativos</p>
                      <p className="text-sm text-muted-foreground">32 dependentes</p>
                      <Button size="sm" className="mt-2" variant="outline">Gerenciar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Vale Alimentação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">121 colaboradores ativos</p>
                      <p className="text-sm text-muted-foreground">R$ 600,00 por colaborador</p>
                      <Button size="sm" className="mt-2" variant="outline">Gerenciar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Vale Transporte</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">98 colaboradores ativos</p>
                      <p className="text-sm text-muted-foreground">Valor médio: R$ 220,00</p>
                      <Button size="sm" className="mt-2" variant="outline">Gerenciar</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentos dos Colaboradores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Repositório de Documentos</h3>
                  <p className="text-muted-foreground">
                    O repositório de documentos dos colaboradores será exibido aqui
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

export default ColaboradoresPage;
