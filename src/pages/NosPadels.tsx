import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";

// 📍 Icône personnalisée pour les marqueurs
const padelIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/Fab3146/Village-Padel-Flavien/main/logo.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// 📍 Coordonnées des terrains
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.840785, 1.298672],
    address: "120 Chem. de la Belle Gabrielle, 82170 Grisolles",
    courts: 1,
    image: "https://via.placeholder.com/400", // Remplace avec la vraie image
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "Padel de Campsas",
    position: [43.883651, 1.406967],
    address: "28 Rue de la Mairie, 82370 Campsas",
    courts: 1,
    image: "https://via.placeholder.com/400", // Remplace avec la vraie image
    link: "/campsas",
  },
];

const NosPadel = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nos Padel en France</h2>
        <p className="text-center text-gray-600 mb-8">
          Découvrez nos différents terrains de padel et réservez votre partie !
        </p>

        {/* 🗺️ Carte */}
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={[43.85, 1.35]} zoom={10} className="h-full w-full">
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />
            {terrains.map((terrain) => (
              <Marker key={terrain.id} position={terrain.position} icon={padelIcon}>
                <Popup>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{terrain.name}</h3>
                    <p className="text-sm text-gray-500">{terrain.address}</p>
                    <p className="text-sm">🎾 {terrain.courts} padel outdoor</p>
                    <Link
                      to={terrain.link}
                      className="mt-2 inline-block bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange-dark transition"
                    >
                      Voir plus
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* 🎾 Widgets sous la carte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {terrains.map((terrain) => (
            <div key={terrain.id} className="bg-white p-6 rounded-lg shadow-lg flex">
              <img src={terrain.image} alt={terrain.name} className="w-1/3 rounded-lg" />
              <div className="ml-4">
                <h3 className="text-xl font-bold">{terrain.name}</h3>
                <p className="text-gray-600">{terrain.address}</p>
                <p className="text-gray-500">🎾 {terrain.courts} padel outdoor</p>
                <Link to={terrain.link} className="mt-2 inline-block bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange-dark transition">
                  Voir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosPadel;
