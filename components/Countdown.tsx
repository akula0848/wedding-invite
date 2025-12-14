import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { TimeLeft } from '../types';

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const weddingDate = new Date("2025-12-15T19:00:00").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-3 md:mx-6">
      <span className="text-3xl md:text-5xl font-serif text-gray-800 font-bold">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-gold-600 mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <FadeIn className="py-20 bg-white text-center">
      <h3 className="font-script text-4xl md:text-5xl text-gray-800 mb-12">
        Тойға дейін қалды
      </h3>
      <div className="flex justify-center flex-wrap">
        <TimeUnit value={timeLeft.days} label="Күн" />
        <span className="text-3xl md:text-5xl font-serif text-gold-300 hidden md:block">:</span>
        <TimeUnit value={timeLeft.hours} label="Сағат" />
        <span className="text-3xl md:text-5xl font-serif text-gold-300 hidden md:block">:</span>
        <TimeUnit value={timeLeft.minutes} label="Минут" />
        <span className="text-3xl md:text-5xl font-serif text-gold-300 hidden md:block">:</span>
        <TimeUnit value={timeLeft.seconds} label="Секунд" />
      </div>
    </FadeIn>
  );
};