import React from 'react';
import { Download } from 'lucide-react';

const BookingCTA = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">
        Réservez votre créneau dès maintenant !
      </h2>
      
      <div className="flex justify-center gap-4">
        <a
          href="https://apps.apple.com/fr/app/village-padel/id6504023084"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors"
        >
          <Download className="h-6 w-6" />
          App Store
        </a>
        
        <a
          href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors"
        >
          <Download className="h-6 w-6" />
          Google Play
        </a>
      </div>
      
      <p className="mt-4 text-gray-600">
        Téléchargez l'application Village Padel pour accéder à toutes nos fonctionnalités
      </p>
    </div>
  );
};

export default BookingCTA;