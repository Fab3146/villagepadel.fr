import React from 'react';
import { Calendar, Users, Shield } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comment Réserver
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, rapide et accessible 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Calendar className="h-12 w-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Réservez facilement</h3>
            <p className="text-gray-600">
              Une interface intuitive pour réserver votre créneau en quelques clics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Users className="h-12 w-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Trouvez des partenaires</h3>
            <p className="text-gray-600">
              Rejoignez la communauté et trouvez facilement des partenaires de jeu.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Shield className="h-12 w-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Tarifs adaptés</h3>
            <p className="text-gray-600">
              Profitez de tarifs préférentiels pour les licenciés des clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;