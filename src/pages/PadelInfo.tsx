import React from 'react';
import Introduction from '../components/PadelInfo/Introduction';
import FAQ from '../components/PadelInfo/FAQ';
import Community from '../components/PadelInfo/Community';

const PadelInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Introduction />
      <FAQ />
      <Community />
    </div>
  );
};

export default PadelInfo;