import React from 'react';

const LocationMap_campsas = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Localisation du Padel de Campsas</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1689.694862818897!2d1.3191592450090848!3d43.89822648271955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1741195443422!5m2!1sfr!2sfr"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Padel de Campsas"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap_campsas;
