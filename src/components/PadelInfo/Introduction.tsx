import React from 'react';

const Introduction = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Tout sur le Padel
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          Bienvenue chez Village Padel !
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Découvrez le padel, un sport ludique et accessible à tous, qui combine le meilleur 
          du tennis et du squash. Grâce à notre système innovant, jouer au padel n'a jamais 
          été aussi simple et agréable.
        </p>
      </div>
    </section>
  );
};

export default Introduction;