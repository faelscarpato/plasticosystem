
import React from 'react';
import ModuleLayout from '../ModuleLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, CheckCircle, Clock, FileText } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import { Progress } from '@/components/ui/progress';

const TreinamentosPage = () => {
  const treinamentos = [
    { 
      id: '001', 
      titulo: 'Segurança no Trabalho', 
      instrutor: 'Roberto Almeida', 
      departamentos: 'Todos', 
      data: '15/06/2023', 
      status: 'Agendado',
      participantes: 45
    },
    { 
      id: '002', 
      titulo: 'Operação de Injetoras', 
      instrutor: 'Carlos Mendes', 
      departamentos: 'Produção', 
      data: '10/06/2023', 
      status: 'Concluído',
      participantes: 12
    },
    { 
      id: '003', 
      titulo: 'Normas ISO 9001', 
      instrutor: 'Ana Silva', 
      departamentos: 'Qualidade, Engenharia', 
      data: '20/06/2023', 
      status: 'Agendado',
      participantes: 18
    },
    { 
      id: '004', 
      titulo: 'Excel Avançado', 
      instrutor: 'Juliana Costa', 
      departamentos: 'Administrativo, Financeiro', 
      data: '05/06/2023', 
      status: 'Concluído',
      participantes: 15
    },
    { 
      id: '005', 
      titulo: 'Gestão de Conflitos', 
      instrutor: 'Márcio Santos', 
      departamentos: 'Supervisores, Líderes', 
      data: '25/06/2023', 
      status: 'Agendado',
      participantes: 20
    },
  ];

  const certificacoes = [
    {
      id: '001',
      nome: 'Carlos Silva',
      cargo: 'Operador de Produção',
      certificacao: 'Operação de Injetoras',
      emissao: '12/05/2023',
      validade: '12/05/2025'
    },
    {
      id: '002',
      nome: 'Ana Oliveira',
      cargo: 'Analista de Qualidade',
      certificacao: 'Auditor Interno ISO 9001',
      emissao: '20/03/2023',
      validade: '20/03/2026'
    },
    {
      id: '003',
      nome: 'Roberto Santos',
      cargo: 'Engenheiro de Produto',
      certificacao: 'SolidWorks Professional',
      emissao: '15/02/2023',
      validade: '15/02/2024'
    },
    {
      id: '004',
      nome: 'Marcos Souza',
      cargo: 'Supervisor de Produção',
      certificacao: 'Lean Manufacturing',
      emissao: '10/01/2023',
      validade: '10/01/2025'
    },
  ];

  return (
    <ModuleLayout title="Gestão de Treinamentos">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Treinamentos e Desenvolvimento</h2>
          <div className="space-x-2">
            <Button>Novo Treinamento</Button>
            <Button variant="outline">Relatórios</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Treinamentos Realizados" 
            value="24" 
            change={{ value: "6", positive: true }} 
            icon={CheckCircle}
            color="bg-intranet-900"
          />
          
          <StatCard 
            title="Treinamentos Planejados" 
            value="12" 
            change={{ value: "3", positive: true }} 
            icon={Calendar}
            color="bg-intranet-800"
          />
          
          <StatCard 
            title="Horas de Treinamento" 
            value="450h" 
            change={{ value: "120h", positive: true }} 
            icon={Clock}
            color="bg-intranet-700"
          />
          
          <StatCard 
            title="Certificações Válidas" 
            value="87" 
            change={{ value: "12", positive: true }} 
            icon={FileText}
            color="bg-intranet-600"
          />
        </div>

        <Tabs defaultValue="calendario" className="w-full">
          <TabsList>
            <TabsTrigger value="calendario">Calendário</TabsTrigger>
            <TabsTrigger value="treinamentos">Treinamentos</TabsTrigger>
            <TabsTrigger value="certificacoes">Certificações</TabsTrigger>
            <TabsTrigger value="resultados">Resultados</TabsTrigger>
          </TabsList>

          <TabsContent value="calendario" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Calendário de Treinamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Calendário</h3>
                  <p className="text-muted-foreground">
                    O calendário de treinamentos será exibido aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treinamentos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Treinamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar treinamentos..." className="pl-8" />
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
                      <TableHead>Título</TableHead>
                      <TableHead>Instrutor</TableHead>
                      <TableHead>Departamentos</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Participantes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {treinamentos.map((treinamento) => (
                      <TableRow key={treinamento.id}>
                        <TableCell>{treinamento.id}</TableCell>
                        <TableCell>{treinamento.titulo}</TableCell>
                        <TableCell>{treinamento.instrutor}</TableCell>
                        <TableCell>{treinamento.departamentos}</TableCell>
                        <TableCell>{treinamento.data}</TableCell>
                        <TableCell>{treinamento.participantes}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            treinamento.status === 'Agendado' 
                              ? 'bg-blue-100 text-blue-800' 
                              : treinamento.status === 'Em andamento' 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-green-100 text-green-800'
                          }`}>
                            {treinamento.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm">Ver</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificacoes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Certificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar certificações..." className="pl-8" />
                    <div className="absolute left-2 top-2.5">🔍</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Filtrar</Button>
                    <Button variant="outline" size="sm">Adicionar</Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Certificação</TableHead>
                      <TableHead>Emissão</TableHead>
                      <TableHead>Validade</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certificacoes.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell>{cert.id}</TableCell>
                        <TableCell>{cert.nome}</TableCell>
                        <TableCell>{cert.cargo}</TableCell>
                        <TableCell>{cert.certificacao}</TableCell>
                        <TableCell>{cert.emissao}</TableCell>
                        <TableCell>{cert.validade}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Ver</Button>
                          <Button variant="ghost" size="sm">Renovar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resultados" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Resultados e Eficácia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Eficácia dos Treinamentos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Segurança no Trabalho</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Operação de Injetoras</span>
                          <span className="text-sm font-medium">87%</span>
                        </div>
                        <Progress value={87} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Normas ISO 9001</span>
                          <span className="text-sm font-medium">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Excel Avançado</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Indicadores de Desenvolvimento</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 text-center">
                      <h3 className="text-lg font-medium">Gráficos de Evolução</h3>
                      <p className="text-muted-foreground">
                        Os gráficos de indicadores de desenvolvimento serão exibidos aqui
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ModuleLayout>
  );
};

export default TreinamentosPage;
