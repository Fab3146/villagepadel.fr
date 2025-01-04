import React from 'react';
import { Shield, Users, Sun } from 'lucide-react';

const Introduction = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: 'Offre 100% gratuite',
      description: 'Village Padel construit et exploite des terrains sans frais pour les clubs.'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: 'Partenariats FFT & Mairies',
      description: 'Développement local du padel en collaboration avec les collectivités.'
    },
    {
      icon: <Sun className="h-6 w-6 text-indigo-600" />,
      title: 'Tarifs avantageux',
      description: 'Conditions privilégiées pour les clubs de tennis et leurs licenciés.'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Village Padel : Installation et Automatisation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une solution innovante pour démocratiser le padel en France
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300"
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
}

export default Introduction;