import React from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, Clock, MapPin } from 'lucide-react';

const DetailCard: React.FC<{ icon: React.ReactNode; title: string; content: string; subContent?: string }> = ({ icon, title, content, subContent }) => (
  <div className="flex flex-col items-center p-6 bg-white shadow-sm border-b-2 border-gold-200 hover:shadow-md transition-shadow duration-300 w-full md:w-1/3 mx-2 my-4 md:my-0 h-full">
    <div className="text-gold-500 mb-4 bg-gold-100 p-4 rounded-full">
      {icon}
    </div>
    <h3 className="font-sans font-medium text-gray-500 uppercase tracking-widest text-sm mb-2">{title}</h3>
    <p className="font-serif text-2xl text-gray-800 font-bold mb-1">{content}</p>
    {subContent && <p className="font-serif text-lg text-gray-600">{subContent}</p>}
  </div>
);

export const Details: React.FC = () => {
  return (
    <section className="bg-gold-100/30 py-20 px-4">
      <FadeIn className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          <DetailCard 
            icon={<Calendar size={24} />} 
            title="Күні" 
            content="15 Желтоқсан" 
            subContent="2025 Жыл" 
          />
          <DetailCard 
            icon={<Clock size={24} />} 
            title="Уақыты" 
            content="19:00" 
            subContent="Кешкі ас" 
          />
          <DetailCard 
            icon={<MapPin size={24} />} 
            title="Мекен-жайы" 
            content="Қордай" 
            subContent="«Бахар» мейрамханасы" 
          />
        </div>
      </FadeIn>
    </section>
  );
};