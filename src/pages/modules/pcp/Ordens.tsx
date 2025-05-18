
import React, { useState } from 'react';
import ModuleLayout from '../ModuleLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

const OrdensPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  
  // Dados de exemplo para ordens de produção
  const ordens = [
    { 
      numero: 'OP-1234', 
      produto: 'Conector X-30', 
      cliente: 'Autopeças ABC',
      quantidade: '5000', 
      inicio: '15/07/2023', 
      fim: '17/07/2023', 
      status: 'Em produção' 
    },
    { 
      numero: 'OP-1235', 
      produto: 'Válvula Y-20', 
      cliente: 'Hidráulica XYZ',
      quantidade: '2000', 
      inicio: '17/07/2023', 
      fim: '19/07/2023', 
      status: 'Programada' 
    },
    { 
      numero: 'OP-1236', 
      produto: 'Engrenagem Z-10', 
      cliente: 'Mecânica Ltda',
      quantidade: '3000', 
      inicio: '18/07/2023', 
      fim: '20/07/2023', 
      status: 'Programada' 
    },
    { 
      numero: 'OP-1237', 
      produto: 'Mangueira W-40', 
      cliente: 'Irrigasul',
      quantidade: '4000', 
      inicio: '14/07/2023', 
      fim: '16/07/2023', 
      status: 'Concluída' 
    },
    { 
      numero: 'OP-1238', 
      produto: 'Tubo Flexível', 
      cliente: 'Construtora Norte',
      quantidade: '6000', 
      inicio: '12/07/2023', 
      fim: '15/07/2023', 
      status: 'Concluída' 
    },
    { 
      numero: 'OP-1239', 
      produto: 'Vedação T-50', 
      cliente: 'Vedações e Cia',
      quantidade: '10000', 
      inicio: '20/07/2023', 
      fim: '25/07/2023', 
      status: 'Programada' 
    },
    { 
      numero: 'OP-1240', 
      produto: 'Conector Rápido', 
      cliente: 'Plásticos Brasil',
      quantidade: '3500', 
      inicio: '15/07/2023', 
      fim: '18/07/2023', 
      status: 'Atrasada' 
    },
  ];

  return (
    <ModuleLayout title="Ordens de Produção">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Ordens de Produção</h2>
          <div className="space-x-2">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button>Nova Ordem</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Nova Ordem de Produção</DialogTitle>
                  <DialogDescription>
                    Crie uma nova ordem de produção para programação
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="numero" className="text-right">
                      Número
                    </Label>
                    <Input
                      id="numero"
                      defaultValue="OP-1241"
                      className="col-span-3"
                      readOnly
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="produto" className="text-right">
                      Produto
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione o produto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Produtos</SelectLabel>
                          <SelectItem value="conector-x30">Conector X-30</SelectItem>
                          <SelectItem value="valvula-y20">Válvula Y-20</SelectItem>
                          <SelectItem value="engrenagem-z10">Engrenagem Z-10</SelectItem>
                          <SelectItem value="mangueira-w40">Mangueira W-40</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="cliente" className="text-right">
                      Cliente
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione o cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Clientes</SelectLabel>
                          <SelectItem value="autopecas-abc">Autopeças ABC</SelectItem>
                          <SelectItem value="hidraulica-xyz">Hidráulica XYZ</SelectItem>
                          <SelectItem value="mecanica-ltda">Mecânica Ltda</SelectItem>
                          <SelectItem value="irrigasul">Irrigasul</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantidade" className="text-right">
                      Quantidade
                    </Label>
                    <Input
                      id="quantidade"
                      type="number"
                      placeholder="0"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="inicio" className="text-right">
                      Início
                    </Label>
                    <Input
                      id="inicio"
                      type="date"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="fim" className="text-right">
                      Fim
                    </Label>
                    <Input
                      id="fim"
                      type="date"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancelar</Button>
                  <Button onClick={() => setOpenDialog(false)}>Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline">Relatórios</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Ordens em Andamento" 
            value="7" 
            change={{ value: "1", positive: false }} 
            icon={Clock}
            color="bg-intranet-900"
          />
          
          <StatCard 
            title="Ordens Concluídas (Mês)" 
            value="18" 
            change={{ value: "4", positive: true }} 
            icon={CheckCircle}
            color="bg-intranet-800"
          />
          
          <StatCard 
            title="Lead Time Médio" 
            value="4,8 dias" 
            change={{ value: "0,3 dia", positive: true }} 
            icon={Calendar}
            color="bg-intranet-700"
          />
          
          <StatCard 
            title="Ordens Atrasadas" 
            value="2" 
            change={{ value: "1", positive: true }} 
            icon={AlertTriangle}
            color="bg-intranet-600"
          />
        </div>

        <Tabs defaultValue="todas" className="w-full">
          <TabsList>
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="programadas">Programadas</TabsTrigger>
            <TabsTrigger value="em-producao">Em Produção</TabsTrigger>
            <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ordens de Produção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar ordens..." className="pl-8" />
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
                      <TableHead>Número</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Fim</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ordens.map((ordem) => (
                      <TableRow key={ordem.numero}>
                        <TableCell className="font-medium">{ordem.numero}</TableCell>
                        <TableCell>{ordem.produto}</TableCell>
                        <TableCell>{ordem.cliente}</TableCell>
                        <TableCell>{ordem.quantidade}</TableCell>
                        <TableCell>{ordem.inicio}</TableCell>
                        <TableCell>{ordem.fim}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${
                            ordem.status === 'Em produção' 
                              ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                              : ordem.status === 'Atrasada' 
                                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                                : ordem.status === 'Programada'
                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                  : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}>
                            {ordem.status}
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

          <TabsContent value="programadas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ordens Programadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Buscar ordens..." className="pl-8" />
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
                      <TableHead>Número</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Fim</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ordens
                      .filter(ordem => ordem.status === 'Programada')
                      .map((ordem) => (
                        <TableRow key={ordem.numero}>
                          <TableCell className="font-medium">{ordem.numero}</TableCell>
                          <TableCell>{ordem.produto}</TableCell>
                          <TableCell>{ordem.cliente}</TableCell>
                          <TableCell>{ordem.quantidade}</TableCell>
                          <TableCell>{ordem.inicio}</TableCell>
                          <TableCell>{ordem.fim}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                              {ordem.status}
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

          <TabsContent value="em-producao" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ordens em Produção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Número</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>Início</TableHead>
                        <TableHead>Fim</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ordens
                        .filter(ordem => ordem.status === 'Em produção')
                        .map((ordem) => (
                          <TableRow key={ordem.numero}>
                            <TableCell className="font-medium">{ordem.numero}</TableCell>
                            <TableCell>{ordem.produto}</TableCell>
                            <TableCell>{ordem.cliente}</TableCell>
                            <TableCell>{ordem.quantidade}</TableCell>
                            <TableCell>{ordem.inicio}</TableCell>
                            <TableCell>{ordem.fim}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {ordem.status}
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="concluidas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ordens Concluídas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Número</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>Início</TableHead>
                        <TableHead>Fim</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ordens
                        .filter(ordem => ordem.status === 'Concluída')
                        .map((ordem) => (
                          <TableRow key={ordem.numero}>
                            <TableCell className="font-medium">{ordem.numero}</TableCell>
                            <TableCell>{ordem.produto}</TableCell>
                            <TableCell>{ordem.cliente}</TableCell>
                            <TableCell>{ordem.quantidade}</TableCell>
                            <TableCell>{ordem.inicio}</TableCell>
                            <TableCell>{ordem.fim}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
                                {ordem.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Ver</Button>
                              <Button variant="ghost" size="sm">Relatório</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ModuleLayout>
  );
};

export default OrdensPage;
