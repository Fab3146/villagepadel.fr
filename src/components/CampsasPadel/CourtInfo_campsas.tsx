import React from 'react';
import { Clock, Euro, Sun, Package } from 'lucide-react';

const CourtInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Sun className="text-brand-orange flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-1">Type de terrain</h3>
            <p className="text-gray-600">
              Outdoor (en plein air), situé dans un cadre agréable et accessible
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="text-brand-orange flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-1">Durée des créneaux</h3>
            <p className="text-gray-600">
              Réservez facilement pour une durée standard de 1h30
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Package className="text-brand-orange flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-1">Location de matériel</h3>
            <p className="text-gray-600">
              4 raquettes et balles disponibles sur place via l'application
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Euro className="text-brand-orange flex-shrink-0" />
          <div>
            <h3 className="font-bold mb-1">Tarifs</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Offre d'ouverture : 20€ pour 1h30</li>
              <li>Tarif normal : 32€ pour 1h30</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtInfo;