import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gold-100 py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-script text-4xl md:text-5xl mb-6">Азамат & Диана</h2>
        <p className="font-serif text-lg italic opacity-80 mb-8">
          Күтеміз!
        </p>
        <div className="text-xs font-sans text-gray-500 uppercase tracking-widest">
          2025 Wedding Invitation
        </div>
      </div>
    </footer>
  );
};