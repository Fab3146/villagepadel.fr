import React from 'react';

const PromoBar: React.FC = () => {
  return (
    <div className="bg-brand-blue text-white text-center py-2 px-4">
      <p className="text-base md:text-lg font-bold">
        🎉 Prix exceptionnel d'ouverture - 20€ pour 1h30 ! 🎉
      </p>
    </div>
  );
};

export default PromoBar;