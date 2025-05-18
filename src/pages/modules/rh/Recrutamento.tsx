
import React from 'react';
import ModuleLayout from '../ModuleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RecrutamentoPage = () => {
  // Dados de exemplo para vagas abertas
  const vagasAbertas = [
    { id: '001', titulo: 'Operador de Produção', departamento: 'Produção', abertura: '15/05/2023', status: 'Ativo' },
    { id: '002', titulo: 'Analista de Qualidade', departamento: 'Qualidade', abertura: '20/05/2023', status: 'Ativo' },
    { id: '003', titulo: 'Auxiliar de Engenharia', departamento: 'Engenharia', abertura: '25/05/2023', status: 'Encerrado' },
    { id: '004', titulo: 'Técnico de Manutenção', departamento: 'Manutenção', abertura: '28/05/2023', status: 'Ativo' },
  ];

  // Dados de exemplo para candidatos
  const candidatos = [
    { id: '001', nome: 'Carlos Silva', vaga: 'Operador de Produção', data: '16/05/2023', status: 'Entrevista' },
    { id: '002', nome: 'Ana Oliveira', vaga: 'Analista de Qualidade', data: '21/05/2023', status: 'Teste Técnico' },
    { id: '003', nome: 'Roberto Santos', vaga: 'Auxiliar de Engenharia', data: '26/05/2023', status: 'Contratado' },
    { id: '004', nome: 'Patrícia Costa', vaga: 'Técnico de Manutenção', data: '29/05/2023', status: 'Currículo' },
    { id: '005', nome: 'Marcos Souza', vaga: 'Operador de Produção', data: '17/05/2023', status: 'Entrevista' },
  ];

  return (
    <ModuleLayout title="Recrutamento e Seleção">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Gestão de Recrutamento</h2>
          <div className="space-x-2">
            <Button>Nova Vaga</Button>
            <Button variant="outline">Importar Currículos</Button>
          </div>
        </div>

        <Tabs defaultValue="vagas" className="w-full">
          <TabsList>
            <TabsTrigger value="vagas">Vagas Abertas</TabsTrigger>
            <TabsTrigger value="candidatos">Candidatos</TabsTrigger>
            <TabsTrigger value="entrevistas">Entrevistas</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="vagas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Vagas em Andamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar vagas..." className="pl-8" />
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
                      <TableHead>Departamento</TableHead>
                      <TableHead>Data de Abertura</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vagasAbertas.map((vaga) => (
                      <TableRow key={vaga.id}>
                        <TableCell>{vaga.id}</TableCell>
                        <TableCell>{vaga.titulo}</TableCell>
                        <TableCell>{vaga.departamento}</TableCell>
                        <TableCell>{vaga.abertura}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            vaga.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {vaga.status}
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

          <TabsContent value="candidatos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Candidatos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar candidatos..." className="pl-8" />
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
                      <TableHead>Vaga</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {candidatos.map((candidato) => (
                      <TableRow key={candidato.id}>
                        <TableCell>{candidato.id}</TableCell>
                        <TableCell>{candidato.nome}</TableCell>
                        <TableCell>{candidato.vaga}</TableCell>
                        <TableCell>{candidato.data}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            candidato.status === 'Contratado' 
                              ? 'bg-green-100 text-green-800' 
                              : candidato.status === 'Entrevista' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-amber-100 text-amber-800'
                          }`}>
                            {candidato.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Perfil</Button>
                          <Button variant="ghost" size="sm">Avaliar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="entrevistas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Agenda de Entrevistas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <h3 className="text-lg font-medium">Calendário de Entrevistas</h3>
                  <p className="text-muted-foreground">
                    O calendário de entrevistas será exibido aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios de Recrutamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <span className="text-lg">Tempo Médio de Contratação</span>
                    <span className="text-sm text-muted-foreground">Por departamento e posição</span>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <span className="text-lg">Fontes de Recrutamento</span>
                    <span className="text-sm text-muted-foreground">Efetividade por canal</span>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <span className="text-lg">Taxa de Conversão</span>
                    <span className="text-sm text-muted-foreground">Candidatos por etapa</span>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <span className="text-lg">Vagas por Departamento</span>
                    <span className="text-sm text-muted-foreground">Distribuição e status</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ModuleLayout>
  );
};

export default RecrutamentoPage;
