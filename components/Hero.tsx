import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('invitation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Wedding Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-cream"></div>
      </div>

      <div className="z-10 text-center px-4 animate-[fadeIn_2s_ease-in]">
        <p className="font-sans text-gold-600 tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
          Үйлену тойына шақыру
        </p>
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gray-800 mb-6 drop-shadow-sm">
          Азамат <span className="text-gold-500">&</span> Диана
        </h1>
        <div className="w-24 h-0.5 bg-gold-400 mx-auto my-6"></div>
        <p className="font-serif text-xl md:text-2xl text-gray-700 italic">
          15.12.2025
        </p>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 z-10 animate-bounce text-gold-600 hover:text-gold-800 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};