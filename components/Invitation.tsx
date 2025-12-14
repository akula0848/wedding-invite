import React from 'react';
import { FadeIn } from './FadeIn';
import { HeartHandshake } from 'lucide-react';

export const Invitation: React.FC = () => {
  return (
    <FadeIn id="invitation" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <div className="flex justify-center mb-8">
        <HeartHandshake className="text-gold-500" size={40} strokeWidth={1} />
      </div>
      
      <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-10 leading-tight">
        Құрметті қонақтар!
      </h2>
      
      <div className="font-serif text-lg md:text-2xl text-gray-600 space-y-6 leading-relaxed">
        <p>
          Сіздерді Азамат пен Диананың<br/>
          шаңырақ көтеру тойына арналған<br/>
          салтанатты кешке шын жүректен шақырамыз.
        </p>
        <p>
          Сіздердің қатысуларыңыз біздің қуанышымызды еселей түспек.<br/>
          Жаңа отбасының бақытты сәттеріне ортақтасып,<br/>
          ақ тілектеріңізді арнауыңызды сұраймыз.
        </p>
      </div>
      
      <div className="mt-12 p-8 border border-gold-300 rounded-sm relative inline-block">
        <div className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 border-t border-l border-gold-500"></div>
        <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 border-t border-r border-gold-500"></div>
        <div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-4 h-4 border-b border-l border-gold-500"></div>
        <div className="absolute bottom-0 right-0 -mb-1 -mr-1 w-4 h-4 border-b border-r border-gold-500"></div>
        
        <p className="font-script text-3xl text-gold-600">
          Қуанышымыздың куәсі болыңыздар!
        </p>
      </div>
    </FadeIn>
  );
};