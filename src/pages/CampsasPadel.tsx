import React from 'react';
import WeatherWidget from '../components/CampsasPadel/WeatherWidget_campsas';
import CourtInfo from '../components/CampsasPadel/CourtInfo_campsas';
import Features from '../components/CampsasPadel/Features_campsas';
import BookingCTA from '../components/CampsasPadel/BookingCTA_campsas';
import ImageCarousel from '../components/ImageCarousel';
import LocationMap from '../components/GrisollesPadel/LocationMap';

const CampsasImages = [
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    alt: "Terrain de padel campsas"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736010636/IMG_2477_lmkxty_4eb23e.jpg",
    alt: "Installation padel"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736011104/cjeyubfsyydtcdwkkxaw_c04b07.jpg",
    alt: "Vue du terrain"
  }
];

const GrisollesPadel = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section d'entête */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            Padel de Grisolles
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Découvrez notre terrain outdoor, conçu pour offrir une expérience unique 
            et conviviale aux amateurs de padel.
          </p>
          <ImageCarousel images={CampsasImages} />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Informations et météo */}
        <div className="grid md:grid-cols-2 gap-12">
          <CourtInfo />
          <WeatherWidget />
        </div>

        {/* Localisation et communauté WhatsApp */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <LocationMap />
          <WhatsAppCommunity />
        </div>

        {/* Autres sections */}
        <Features />
        <BookingCTA />
      </div>
    </div>
  );
};

export default GrisollesPadel;