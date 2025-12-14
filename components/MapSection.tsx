import React from 'react';
import { FadeIn } from './FadeIn';
import { Navigation } from 'lucide-react';

export const MapSection: React.FC = () => {
  // Constructing a Google Maps search URL for the location
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Бахар+мейрамханасы+Қордай";

  return (
    <section className="relative w-full h-96 bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* 
        Using a static placeholder image that represents a map or a venue vibe because 
        we don't have a real API key for an interactive map in this static generator. 
      */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1200/600?grayscale&blur=2" 
            alt="Map Location Background" 
            className="w-full h-full object-cover opacity-30"
          />
      </div>

      <FadeIn className="z-10 bg-white p-8 shadow-xl max-w-md w-full mx-4 text-center rounded-sm">
        <h3 className="font-serif text-2xl mb-2 text-gray-800">Мекен-жайымыз</h3>
        <p className="font-sans text-gray-600 mb-6">«Бахар» мейрамханасы, Қордай</p>
        
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-sans uppercase tracking-widest text-xs transition-colors duration-300 rounded-sm"
        >
          <Navigation size={16} className="mr-2" />
          Картадан ашу
        </a>
      </FadeIn>
    </section>
  );
};