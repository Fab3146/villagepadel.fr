import React from 'react';
import { Download } from 'lucide-react';
import AppScreenshotCarousel from '../../components/AppScreenshotCarousel';

const AppFeatures = () => {
  const appScreenshots = [
    {
      url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/screenshots/welcome.png",
      alt: "Écran d'accueil Village Padel"
    },
    {
      url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/screenshots/features.png",
      alt: "Fonctionnalités Village Padel"
    },
    {
      url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/screenshots/home.png",
      alt: "Page d'accueil Village Padel"
    },
    {
      url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/screenshots/profile.png",
      alt: "Profil Village Padel"
    },
    {
      url: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/screenshots/team.png",
      alt: "Équipe Village Padel"
    }
  ];

  const features = [
    "Paiement sécurisé",
    "Application intuitive",
    "Accès au terrain et au matériel directement depuis l'application",
    "Gestion de la lumière du terrain",
    "Annulation facile et rapide",
    "Réservation d'une partie en moins d'1 minute"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Une application au service des villageois</h2>
          <p className="text-gray-600 mb-8">
            L'application Village Padel est votre compagnon pour organiser vos parties 
            et profiter d'un terrain 100% automatisé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AppScreenshotCarousel screenshots={appScreenshots} />

          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-brand-orange rounded-full"></div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="https://apps.apple.com/fr/app/village-padel/id6504023084"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
              >
                <Download className="mr-2" />
                Télécharger sur l'App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-brand-orange-dark transition flex items-center justify-center"
              >
                <Download className="mr-2" />
                Télécharger sur Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;