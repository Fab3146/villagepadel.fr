import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";
import "../NosPadels.css"; // Assurez-vous que le fichier est bien ici

// ✅ Icône personnalisée pour les marqueurs
const padelIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/damfvriyn/image/upload/v1741120072/-Village_Padel_LOGO_LOLA_Bon__1_sansfond.qpng_kkjnua.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// 📍 Données des terrains de padel avec les nouvelles coordonnées
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.821025628963014, 1.287244646725756],
    address: "120 Chem. de la Belle Gabrielle, 82170 Grisolles",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/481270219_122142807104570408_784936930886099981_n_yoayxg.jpg",
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "Padel de Campsas",
    position: [43.89817203012283, 1.3185011967391125],
    address: "28 Rue de la Mairie, 82370 Campsas",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    link: "/campsas",
  },
];

const NosPadels = () => {
  const [search, setSearch] = useState("");

  // 🔎 Filtrer les terrains selon la recherche
  const filteredTerrains = terrains.filter((terrain) =>
    terrain.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* 📝 Panneau latéral gauche (widgets) */}
      <div className="lg:w-1/3 w-full bg-white p-6 overflow-y-auto shadow-lg z-10 lg:h-full">
        <h2 className="text-2xl font-bold mb-4">Rechercher un Padel</h2>
        <input
          type="text"
          placeholder="Rechercher par nom..."
          className="w-full p-2 mb-4 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="text-sm text-gray-500 mb-2">
          {filteredTerrains.length} terrains trouvés
        </p>

        {filteredTerrains.map((terrain) => (
          <div
            key={terrain.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={terrain.image}
              alt={terrain.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{terrain.name}</h3>
            <p className="text-sm text-gray-500">{terrain.address}</p>
            <Link
              to={terrain.link}
              className="mt-2 block bg-brand-orange text-white px-4 py-2 rounded-lg text-center hover:bg-brand-orange-dark transition"
            >
              Voir plus
            </Link>
          </div>
        ))}
      </div>

      {/* 🗺️ Carte interactive */}
      <div className="lg:w-2/3 w-full flex-grow h-full">
        <MapContainer center={[43.85, 1.35]} zoom={10} className="h-full w-full">
          {/* 🌍 Fond de carte stylisé */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {/* 📍 Clustering des marqueurs */}
          <MarkerClusterGroup>
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
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default NosPadels;
