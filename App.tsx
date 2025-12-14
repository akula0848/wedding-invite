import React from 'react';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Details } from './components/Details';
import { Countdown } from './components/Countdown';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 selection:bg-gold-200 selection:text-gold-800">
      <Hero />
      <main className="flex-grow">
        <Invitation />
        <Details />
        <Countdown />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;