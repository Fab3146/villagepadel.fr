import React from 'react';
import { Smartphone, Shield, Users } from 'lucide-react';

const TechnicalOffer = () => {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
      title: 'Application Mobile',
      description: 'Accès autonome, simple et sécurisé à nos terrains de padel.'
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: 'Location de Matériel',
      description: 'Réservation de raquettes et balles via l\'application en toute sécurité.'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: 'Solution Club',
      description: 'Une plateforme flexible adaptée aux besoins spécifiques des clubs sportifs.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Notre Offre Technique
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une solution digitale complète pour votre club
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalOffer;