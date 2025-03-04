import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

// 📍 Coordonnées des terrains
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.8181, 1.2902],
    address: "123 Rue du Padel, 82170 Grisolles",
    courts: 2,
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "Padel de Campsas",
    position: [43.8765, 1.2854],
    address: "456 Avenue du Sport, 82370 Campsas",
    courts: 3,
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
          <MapContainer center={[43.85, 1.29]} zoom={10} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {terrains.map((terrain) => (
              <Marker key={terrain.id} position={terrain.position}>
                <Popup>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{terrain.name}</h3>
                    <p className="text-sm text-gray-500">{terrain.address}</p>
                    <p className="text-sm">Terrains disponibles : {terrain.courts}</p>
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
      </div>
    </div>
  );
};

export default NosPadel;
