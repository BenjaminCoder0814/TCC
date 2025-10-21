'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Bell, 
  Shield, 
  Eye, 
  Mail, 
  Smartphone, 
  Moon, 
  Sun, 
  Globe,
  CreditCard,
  MapPin,
  User,
  Save,
  Check
} from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';

export default function Configuracoes() {
  const { user } = useAuthStore();
  const [salvo, setSalvo] = useState(false);
  
  // Estados das configurações
  const [config, setConfig] = useState({
    // Notificações
    emailPedidos: true,
    emailPromocoes: false,
    pushPedidos: true,
    pushPromocoes: true,
    whatsappPedidos: false,
    
    // Privacidade
    perfilPublico: false,
    mostrarProgresso: true,
    compartilharRanking: true,
    
    // Preferências
    tema: 'light',
    idioma: 'pt-BR',
    moeda: 'BRL',
    
    // Endereço padrão
    cepPadrao: '',
    cidadePadrao: '',
    
    // Pagamento
    cartaoSalvo: true,
    compraRapida: false
  });

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleSalvar = () => {
    // Aqui você salvaria as configurações
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Acesso Restrito</h2>
          <p className="text-gray-500">Faça login para acessar as configurações</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Personalize sua experiência na plataforma</p>
        </motion.div>

        <div className="space-y-6">
          {/* Notificações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Notificações</h2>
                <p className="text-gray-600">Configure como deseja receber avisos</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">E-mail</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={config.emailPedidos}
                        onChange={(e) => handleConfigChange('emailPedidos', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Status de pedidos</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={config.emailPromocoes}
                        onChange={(e) => handleConfigChange('emailPromocoes', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Promoções</span>
                    </label>
                  </div>
                </div>

                {/* Push */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">Push</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={config.pushPedidos}
                        onChange={(e) => handleConfigChange('pushPedidos', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Status de pedidos</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={config.pushPromocoes}
                        onChange={(e) => handleConfigChange('pushPromocoes', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Promoções</span>
                    </label>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">WhatsApp</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={config.whatsappPedidos}
                        onChange={(e) => handleConfigChange('whatsappPedidos', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Status de pedidos</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Privacidade</h2>
                <p className="text-gray-600">Controle suas informações públicas</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-700">Perfil público</span>
                  <p className="text-sm text-gray-500">Outros usuários podem ver seu perfil</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.perfilPublico}
                  onChange={(e) => handleConfigChange('perfilPublico', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-700">Mostrar progresso</span>
                  <p className="text-sm text-gray-500">Exibir evolução nos treinos</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.mostrarProgresso}
                  onChange={(e) => handleConfigChange('mostrarProgresso', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-700">Compartilhar ranking</span>
                  <p className="text-sm text-gray-500">Aparecer nos rankings públicos</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.compartilharRanking}
                  onChange={(e) => handleConfigChange('compartilharRanking', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
            </div>
          </motion.div>

          {/* Preferências */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Preferências</h2>
                <p className="text-gray-600">Personalize a interface</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
                <select
                  value={config.tema}
                  onChange={(e) => handleConfigChange('tema', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="light">Claro</option>
                  <option value="dark">Escuro</option>
                  <option value="auto">Automático</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                <select
                  value={config.idioma}
                  onChange={(e) => handleConfigChange('idioma', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Español</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Localização e Pagamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Compras</h2>
                <p className="text-gray-600">Configurações de pedidos e pagamento</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CEP Padrão</label>
                  <input
                    type="text"
                    value={config.cepPadrao}
                    onChange={(e) => handleConfigChange('cepPadrao', e.target.value)}
                    placeholder="00000-000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cidade Padrão</label>
                  <input
                    type="text"
                    value={config.cidadePadrao}
                    onChange={(e) => handleConfigChange('cidadePadrao', e.target.value)}
                    placeholder="Sua cidade"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-700">Salvar cartões</span>
                    <p className="text-sm text-gray-500">Para facilitar futuras compras</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.cartaoSalvo}
                    onChange={(e) => handleConfigChange('cartaoSalvo', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </label>

                <label className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-700">Compra rápida</span>
                    <p className="text-sm text-gray-500">Finalizar com um clique</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.compraRapida}
                    onChange={(e) => handleConfigChange('compraRapida', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>
          </motion.div>

          {/* Botão Salvar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-end"
          >
            <button
              onClick={handleSalvar}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                salvo
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {salvo ? (
                <>
                  <Check className="w-5 h-5" />
                  Salvo!
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Salvar Configurações
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}