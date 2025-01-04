import React from 'react';
import WeatherWidget from '../components/GrisollesPadel/WeatherWidget';
import CourtInfo from '../components/GrisollesPadel/CourtInfo';
import Features from '../components/GrisollesPadel/Features';
import BookingCTA from '../components/GrisollesPadel/BookingCTA';
import ImageCarousel from '../components/ImageCarousel';

const grisollesImages = [
  {
    url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/34fdcfcf245808e7550b09e48b6f01a664afee9e/IMG_2452.HEIC",
    alt: "Terrain de padel Grisolles"
  },
  {
    url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/34fdcfcf245808e7550b09e48b6f01a664afee9e/IMG_2477.HEIC",
    alt: "Installation padel"
  },
  {
    url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/34fdcfcf245808e7550b09e48b6f01a664afee9e/IMG_E2457.HEIC",
    alt: "Vue du terrain"
  }
];

const GrisollesPadel = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            Padel de Grisolles
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Découvrez notre terrain outdoor, conçu pour offrir une expérience unique 
            et conviviale aux amateurs de padel.
          </p>
          <ImageCarousel images={grisollesImages} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <CourtInfo />
          <WeatherWidget />
        </div>
        <Features />
        <BookingCTA />
      </div>
    </div>
  );
};

export default GrisollesPadel;