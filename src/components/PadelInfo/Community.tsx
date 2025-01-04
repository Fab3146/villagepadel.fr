import React from 'react';
import { Users, Trophy, Calendar } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            Rejoignez la communauté Village Padel !
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Chez Village Padel, chaque joueur est un villageois. En plus de réserver et jouer, 
            vous pourrez bientôt participer à des défis amusants et consulter votre classement local.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Communauté Active</h3>
              <p className="text-gray-600">Rejoignez une communauté passionnée de joueurs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Trophy className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Défis & Classements</h3>
              <p className="text-gray-600">Participez à des défis et suivez votre progression</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Événements Réguliers</h3>
              <p className="text-gray-600">Des tournois et rencontres tout au long de l'année</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;