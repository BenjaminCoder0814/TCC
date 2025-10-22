'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface Ad {
  id: string;
  title: string;
  image: string;
  url: string;
  type: 'banner' | 'popup' | 'sidebar';
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration?: number;
}

const ADS: Ad[] = [
  {
    id: 'promo-whey',
    title: 'Promoção Whey Protein 50% OFF',
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=400&q=80',
    url: '/shop?category=suplementos',
    type: 'popup',
    position: 'center',
    duration: 10000
  },
  {
    id: 'banner-top',
    title: 'Frete Grátis acima de R$ 199',
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=800&q=80',
    url: '/shop',
    type: 'banner',
    position: 'top'
  }
];

export default function AdsManager() {
  const [visibleAds, setVisibleAds] = useState<Ad[]>([]);
  const [closedAds, setClosedAds] = useState<string[]>([]);

  useEffect(() => {
    // Show popup ads after 3 seconds
    const timer = setTimeout(() => {
      const popupAds = ADS.filter(ad => 
        ad.type === 'popup' && !closedAds.includes(ad.id)
      );
      setVisibleAds(prev => [...prev, ...popupAds]);
    }, 3000);

    // Show banner ads immediately
    const bannerAds = ADS.filter(ad => ad.type === 'banner');
    setVisibleAds(prev => [...prev, ...bannerAds]);

    return () => clearTimeout(timer);
  }, [closedAds]);

  const closeAd = (adId: string) => {
    setClosedAds(prev => [...prev, adId]);
    setVisibleAds(prev => prev.filter(ad => ad.id !== adId));
  };

  const handleAdClick = (ad: Ad) => {
    window.open(ad.url, '_blank');
    closeAd(ad.id);
  };

  return (
    <>
      <AnimatePresence>
        {visibleAds.map(ad => {
          if (ad.type === 'popup') {
            return (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                  <button
                    onClick={() => closeAd(ad.id)}
                    className="absolute top-2 right-2 z-10 p-1 bg-gray-900 bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div 
                    className="cursor-pointer"
                    onClick={() => handleAdClick(ad)}
                  >
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {ad.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Clique para ver ofertas
                        </span>
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  {ad.duration && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                      <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        transition={{ duration: ad.duration / 1000, ease: 'linear' }}
                        onAnimationComplete={() => closeAd(ad.id)}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          }

          if (ad.type === 'banner') {
            return (
              <motion.div
                key={ad.id}
                initial={{ y: ad.position === 'top' ? -100 : 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: ad.position === 'top' ? -100 : 100, opacity: 0 }}
                className={`fixed left-0 right-0 z-40 ${
                  ad.position === 'top' ? 'top-0' : 'bottom-0'
                }`}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                    <div 
                      className="flex items-center space-x-3 cursor-pointer flex-1"
                      onClick={() => handleAdClick(ad)}
                    >
                      <span className="text-sm font-medium">🎉 {ad.title}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <button
                      onClick={() => closeAd(ad.id)}
                      className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }

          return null;
        })}
      </AnimatePresence>
    </>
  );
}