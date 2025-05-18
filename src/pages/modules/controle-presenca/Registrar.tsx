
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import {
  Users,
  CheckCircle,
  XCircle,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const RegistrarPresencaPage = () => {
  const navigate = useNavigate();
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [registrosHoje, setRegistrosHoje] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Buscar funcionários
      const { data: funcionariosData, error: funcionariosError } = await supabase
        .from('funcionarios')
        .select('*');
        
      if (funcionariosError) throw funcionariosError;
      
      // Buscar registros de hoje
      const hoje = new Date().toISOString().split('T')[0];
      const { data: registrosData, error: registrosError } = await supabase
        .from('registros_presenca')
        .select('*')
        .eq('data', hoje);
        
      if (registrosError) throw registrosError;
      
      // Mapear registros por funcionário_id
      const registrosMap = {};
      registrosData?.forEach(registro => {
        registrosMap[registro.funcionario_id] = registro;
      });
      
      setFuncionarios(funcionariosData || []);
      setRegistrosHoje(registrosMap);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast.error('Erro ao carregar lista de funcionários');
    } finally {
      setLoading(false);
    }
  };

  const registrarPresenca = async (funcionarioId, status) => {
    try {
      const hoje = new Date().toISOString().split('T')[0];
      
      // Verificar se já existe registro
      if (registrosHoje[funcionarioId]) {
        // Atualizar registro existente
        const { error } = await supabase
          .from('registros_presenca')
          .update({ status })
          .eq('id', registrosHoje[funcionarioId].id);
          
        if (error) throw error;
        
        toast.success('Registro de presença atualizado com sucesso!');
      } else {
        // Criar novo registro
        const { error } = await supabase
          .from('registros_presenca')
          .insert({ 
            funcionario_id: funcionarioId, 
            data: hoje,
            status 
          });
          
        if (error) throw error;
        
        toast.success('Registro de presença criado com sucesso!');
      }
      
      // Atualizar a lista local
      setRegistrosHoje(prev => ({
        ...prev,
        [funcionarioId]: { funcionario_id: funcionarioId, status }
      }));
      
    } catch (error) {
      console.error('Erro ao registrar presença:', error);
      toast.error('Erro ao registrar presença. Tente novamente.');
    }
  };

  // Filtrar funcionários pelo termo de busca
  const filteredFuncionarios = funcionarios.filter(f => 
    f.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Registrar Presença</h1>
        <div className="space-x-2">
          <Button onClick={() => navigate('/modules/controle-presenca')} variant="outline">
            Voltar
          </Button>
          <Button onClick={fetchData}>
            Atualizar
          </Button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10" 
            placeholder="Buscar funcionário..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-100 text-green-800 p-2 rounded-md flex items-center gap-1">
            <CheckCircle size={16} />
            <span>Presente</span>
          </div>
          <div className="bg-red-100 text-red-800 p-2 rounded-md flex items-center gap-1">
            <XCircle size={16} />
            <span>Ausente</span>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-10">Carregando lista de funcionários...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFuncionarios.length > 0 ? (
            filteredFuncionarios.map(funcionario => (
              <Card key={funcionario.id} className="card-hover">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">{funcionario.nome}</h3>
                    <p className="text-sm text-muted-foreground">{funcionario.tipo}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant={registrosHoje[funcionario.id]?.status === 'presente' ? 'default' : 'outline'}
                      className={registrosHoje[funcionario.id]?.status === 'presente' ? 'bg-green-600 hover:bg-green-700' : ''}
                      onClick={() => registrarPresenca(funcionario.id, 'presente')}
                    >
                      <CheckCircle size={16} className="mr-1" />
                      Presente
                    </Button>
                    <Button 
                      size="sm" 
                      variant={registrosHoje[funcionario.id]?.status === 'ausente' ? 'default' : 'outline'}
                      className={registrosHoje[funcionario.id]?.status === 'ausente' ? 'bg-red-600 hover:bg-red-700' : ''}
                      onClick={() => registrarPresenca(funcionario.id, 'ausente')}
                    >
                      <XCircle size={16} className="mr-1" />
                      Ausente
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              Nenhum funcionário encontrado com esse termo de busca.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegistrarPresencaPage;
