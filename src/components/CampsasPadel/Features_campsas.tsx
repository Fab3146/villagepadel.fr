import React from 'react';
import { MapPin, Users, Smartphone, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-orange" />,
      title: "Localisation parfaite",
      description: "Situé au cœur de Grisolles, facile d'accès pour tous les 'villageois'"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-orange" />,
      title: "Ambiance conviviale",
      description: "Rencontrez d'autres passionnés de padel dans un cadre chaleureux"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-brand-orange" />,
      title: "Réservation simplifiée",
      description: "Téléchargez l'application Village Padel pour réserver en quelques clics"
    },
    {
      icon: <Award className="h-8 w-8 text-brand-orange" />,
      title: "Bientôt disponible",
      description: "Des classements pour challenger vos amis et des défis pour animer la communauté"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Pourquoi choisir le Padel de Grisolles ?
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;