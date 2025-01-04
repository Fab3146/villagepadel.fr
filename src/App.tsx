import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PadelInfo from './pages/PadelInfo';
import GrisollesPadel from './pages/GrisollesPadel';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <PromoBar />
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          showQR={showQR} 
          setShowQR={setShowQR}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/padel-info" element={<PadelInfo />} />
            <Route path="/grisolles" element={<GrisollesPadel />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;