'use client';

import type { Professional } from '@/types';

interface ProfessionalCardProps {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative">
        <img
          src={professional.image}
          alt={professional.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            professional.availability 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {professional.availability ? 'Disponível' : 'Ocupado'}
          </span>
        </div>

        {/* Quick Contact */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
            <i className="fas fa-comment mr-2"></i>
            Conversar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-gray-800 text-lg mb-1">
          {professional.name}
        </h3>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1 mb-3">
          {professional.specialties.slice(0, 2).map((specialty, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
          {professional.specialties.length > 2 && (
            <span className="text-xs text-gray-500">
              +{professional.specialties.length - 2}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${i < professional.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              ></i>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({professional.reviews})
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2">
          <i className="fas fa-map-marker-alt mr-2 text-primary-500"></i>
          <span className="text-sm">{professional.location}</span>
        </div>

        {/* Experience */}
        <div className="flex items-center text-gray-600 mb-3">
          <i className="fas fa-medal mr-2 text-primary-500"></i>
          <span className="text-sm">{professional.experience} anos de experiência</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-800">
              R$ {professional.price}
            </span>
            <span className="text-sm text-gray-500">/sessão</span>
          </div>
          
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm">
            <i className="fas fa-calendar-plus mr-1"></i>
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
}