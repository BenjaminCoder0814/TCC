'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, Search, Filter } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';

// Mock data para pedidos
const mockPedidos = [
  {
    id: 'P001',
    data: '2025-10-15',
    status: 'entregue',
    total: 189.90,
    produtos: [
      { nome: 'Whey Protein Premium Chocolate 2kg', quantidade: 1, preco: 189.90 }
    ],
    tracking: 'BR123456789',
    entrega: '2025-10-18'
  },
  {
    id: 'P002', 
    data: '2025-10-20',
    status: 'em_transito',
    total: 299.80,
    produtos: [
      { nome: 'Tênis Nike Training Revolution 6', quantidade: 1, preco: 299.90 },
      { nome: 'Creatina Creapure® 300g', quantidade: 1, preco: 89.90 }
    ],
    tracking: 'BR987654321',
    previsao: '2025-10-23'
  },
  {
    id: 'P003',
    data: '2025-10-21',
    status: 'processando', 
    total: 159.80,
    produtos: [
      { nome: 'Kit Elásticos Premium 11 Peças', quantidade: 1, preco: 99.90 },
      { nome: 'Shaker Premium Inox 800ml', quantidade: 1, preco: 59.90 }
    ],
    tracking: null,
    previsao: '2025-10-25'
  }
];

const statusConfig = {
  processando: { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: Clock, label: 'Processando' },
  em_transito: { color: 'text-blue-600', bg: 'bg-blue-100', icon: Truck, label: 'Em Trânsito' },
  entregue: { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle, label: 'Entregue' }
};

export default function MeusPedidos() {
  const { user } = useAuthStore();
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [termoBusca, setTermoBusca] = useState('');

  const pedidosFiltrados = mockPedidos.filter(pedido => {
    const matchStatus = filtroStatus === 'todos' || pedido.status === filtroStatus;
    const matchBusca = pedido.id.toLowerCase().includes(termoBusca.toLowerCase()) ||
                      pedido.produtos.some(p => p.nome.toLowerCase().includes(termoBusca.toLowerCase()));
    return matchStatus && matchBusca;
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Acesso Restrito</h2>
          <p className="text-gray-500">Faça login para ver seus pedidos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meus Pedidos</h1>
          <p className="text-gray-600">Acompanhe o status dos seus pedidos</p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por pedido ou produto..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtro de Status */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="todos">Todos os Status</option>
                <option value="processando">Processando</option>
                <option value="em_transito">Em Trânsito</option>
                <option value="entregue">Entregue</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Lista de Pedidos */}
        <div className="space-y-6">
          {pedidosFiltrados.map((pedido, index) => {
            const statusInfo = statusConfig[pedido.status as keyof typeof statusConfig];
            const StatusIcon = statusInfo.icon;

            return (
              <motion.div
                key={pedido.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Header do Pedido */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Pedido #{pedido.id}</h3>
                        <p className="text-sm text-gray-500">
                          Realizado em {new Date(pedido.data).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`text-sm font-medium ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          R$ {pedido.total.toFixed(2).replace('.', ',')}
                        </p>
                        <p className="text-sm text-gray-500">
                          {pedido.produtos.length} {pedido.produtos.length === 1 ? 'item' : 'itens'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produtos do Pedido */}
                <div className="p-6">
                  <div className="space-y-3">
                    {pedido.produtos.map((produto, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{produto.nome}</p>
                          <p className="text-sm text-gray-500">Quantidade: {produto.quantidade}</p>
                        </div>
                        <p className="font-semibold text-gray-900">
                          R$ {produto.preco.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Informações de Entrega */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pedido.tracking && (
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Código de Rastreamento</p>
                          <p className="font-mono text-sm font-medium text-blue-600">{pedido.tracking}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {pedido.status === 'entregue' ? 'Entregue em' : 'Previsão de Entrega'}
                        </p>
                        <p className="font-medium text-gray-900">
                          {new Date(pedido.entrega || pedido.previsao!).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {pedidosFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Nenhum pedido encontrado</h3>
            <p className="text-gray-500">Tente ajustar os filtros ou fazer uma nova busca</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}