import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";

// 🏓 Icône personnalisée pour les marqueurs
const padelIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/damfvriyn/image/upload/v1741120072/-Village_Padel_LOGO_LOLA_Bon__1_sansfond.qpng_kkjnua.png", // Remplace avec un lien valide
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// 📍 Coordonnées et infos des terrains
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.840785, 1.298672],
    address: "120 Chem. de la Belle Gabrielle, 82170 Grisolles",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/481270219_122142807104570408_784936930886099981_n_yoayxg.jpg",
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "Padel de Campsas",
    position: [43.883651, 1.406967],
    address: "28 Rue de la Mairie, 82370 Campsas",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    link: "/campsas",
  },
];

const NosPadel = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Nos Padel en France
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Découvrez nos différents terrains de padel et réservez votre partie !
        </p>

        {/* 🗺️ Carte */}
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={[43.85, 1.35]} zoom={10} className="h-full w-full">
            {/* 🌍 Fond de carte stylisé (CartoDB) */}
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

        {/* 🎾 Widgets sous la carte */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {terrains.map((terrain) => (
            <div
              key={terrain.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={terrain.image}
                alt={terrain.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{terrain.name}</h3>
              <p className="text-gray-500">{terrain.address}</p>
              <p className="mt-2 text-sm font-medium">
                🏓 Nombre de terrains : {terrain.courts} Padel Outdoor
              </p>
              <Link
                to={terrain.link}
                className="mt-4 inline-block bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange-dark transition"
              >
                Voir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosPadel;
