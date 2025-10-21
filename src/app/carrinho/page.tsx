'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

export default function CarrinhoPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const frete = totalPrice > 199 ? 0 : 15.90;
  const desconto = totalPrice > 299 ? totalPrice * 0.1 : 0;
  const totalFinal = totalPrice + frete - desconto;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      alert('Faça login para finalizar a compra');
      return;
    }

    setIsCheckingOut(true);

    // Simular processamento do pagamento
    setTimeout(() => {
      setIsCheckingOut(false);
      setShowCheckout(true);
    }, 2000);
  };

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-green-500 text-3xl"></i>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pedido Realizado!
            </h2>
            
            <p className="text-gray-600 mb-6">
              Seu pedido foi processado com sucesso. Você receberá um email com os detalhes.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Número do pedido:</p>
              <p className="font-mono text-lg font-semibold">ML-{Date.now()}</p>
            </div>

            <div className="space-y-3">
              <Link
                href="/meus-pedidos"
                className="block w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Ver Meus Pedidos
              </Link>
              
              <Link
                href="/loja"
                className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-gray-500 mb-8">
              Adicione produtos incríveis para começar suas compras
            </p>
            <Link
              href="/loja"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              <i className="fas fa-store mr-2"></i>
              Ir para a Loja
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Carrinho</h1>
            <p className="text-gray-600">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
          </div>
          
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <i className="fas fa-trash mr-2"></i>
            Limpar Carrinho
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md">
              {items.map((item, index) => (
                <div key={item.product.id} className={`p-6 ${index !== items.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.product.category}
                      </p>
                      <p className="text-lg font-bold text-primary-500">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <i className="fas fa-minus text-sm"></i>
                      </button>
                      
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <i className="fas fa-plus text-sm"></i>
                      </button>
                    </div>
                    
                    {/* Subtotal */}
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-600 transition-colors p-2"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">R$ {totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className={`font-semibold ${frete === 0 ? 'text-green-500' : ''}`}>
                    {frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`}
                  </span>
                </div>
                
                {desconto > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>Desconto (10%)</span>
                    <span className="font-semibold">-R$ {desconto.toFixed(2)}</span>
                  </div>
                )}
                
                <hr />
                
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary-500">R$ {totalFinal.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-truck mr-2"></i>
                  {frete === 0 ? (
                    <span className="text-green-600">Frete grátis para compras acima de R$ 199</span>
                  ) : (
                    <span>Frete: R$ {frete.toFixed(2)} - Grátis acima de R$ 199</span>
                  )}
                </div>
                
                {desconto > 0 && (
                  <div className="flex items-center text-sm text-green-600 mt-2">
                    <i className="fas fa-tag mr-2"></i>
                    <span>Desconto de 10% aplicado para compras acima de R$ 299</span>
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isCheckingOut ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Processando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-credit-card mr-2"></i>
                    Finalizar Compra
                  </>
                )}
              </button>

              {/* Continue Shopping */}
              <Link
                href="/loja"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Continuar Comprando
              </Link>

              {/* Payment Methods */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Formas de pagamento:</p>
                <div className="flex space-x-2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded text-xs font-medium">PIX</div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium">Cartão</div>
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded text-xs font-medium">Boleto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}