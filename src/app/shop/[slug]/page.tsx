'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex text-sm text-gray-500 mb-8">
          <span 
            onClick={() => router.push('/')}
            className="hover:text-blue-600 cursor-pointer"
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span 
            onClick={() => router.push('/shop')}
            className="hover:text-blue-600 cursor-pointer"
          >
            Loja
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Produto</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Produto: {params.slug}
          </h1>
          <p className="text-gray-600 mb-6">
            Página de produto em desenvolvimento. Esta página será implementada com os detalhes completos do produto.
          </p>
          
          <button 
            onClick={() => router.push('/shop')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para a loja
          </button>
        </div>
      </div>
    </div>
  );
}