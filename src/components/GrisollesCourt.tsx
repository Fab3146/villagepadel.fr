import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const GrisollesCourt = () => {
  return (
    <section id="grisolles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Notre Premier Terrain Outdoor à Grisolles
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez notre premier terrain de padel en milieu rural, une installation moderne et accessible à tous.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-700">Complexe sportif de Grisolles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-700">Ouverture le 21 Novembre</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-700">Accessible aux licenciés et non-licenciés</span>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7057351691537!2d1.2849482756664545!3d43.820462841597454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac03797fae2099%3A0xb0184e9f73d0075b!2sVillage%20Padel!5e0!3m2!1sfr!2sfr!4v1735989484876!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Terrain de padel à Grisolles"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrisollesCourt;