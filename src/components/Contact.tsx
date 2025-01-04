import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <a
            href="mailto:contact@villagepadel.fr"
            className="flex items-center justify-center space-x-2 bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-brand-orange-dark transition duration-300"
          >
            <Mail className="h-6 w-6" />
            <span className="text-lg font-medium">Envoyez-nous un email</span>
          </a>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-brand-blue mb-4">Village Padel</h3>
            <p className="text-gray-600 mb-2">Email: contact@villagepadel.fr</p>
            <p className="text-gray-600">
              Complexe sportif de Grisolles<br />
              82170 Grisolles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;