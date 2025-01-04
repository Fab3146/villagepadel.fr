import React from 'react';
import { Key, Settings, PhoneCall, Wrench } from 'lucide-react';

const Automation = () => {
  return (
    <section id="automation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Notre Solution d'Automatisation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une gestion intelligente et autonome de vos terrains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
            <Key className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Gestion d'accès autonome</h3>
            <p className="text-gray-600">
              Contrôle des accès aux terrains et équipements via l'application.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
            <Settings className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Installation simple</h3>
            <p className="text-gray-600">
              Système de contrôle d'accès adaptable à votre infrastructure.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
            <Wrench className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Solution clé en main</h3>
            <p className="text-gray-600">
              De l'installation à la maintenance, nous gérons tout pour vous.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
            <PhoneCall className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Support continu</h3>
            <p className="text-gray-600">
              Assistance technique et suivi régulier pour une performance optimale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;