import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";
import "../NosPadels.css"; // ✅ Import des styles

// 📍 Icône pour les marqueurs
const padelIcon = new L.Icon({
  iconUrl: "https://res.cloudinary.com/damfvriyn/image/upload/v1741120072/-Village_Padel_LOGO_LOLA_Bon__1_sansfond.qpng_kkjnua.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// 📍 Terrains de padel
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.821025628963014, 1.287244646725756],
    address: "120 Chem. de la Belle Gabrielle, 82170 Grisolles",
    courts: 1,
    image: "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/481270219_122142807104570408_784936930886099981_n_yoayxg.jpg",
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "Padel de Campsas",
    position: [43.89817203012283, 1.3185011967391125],
    address: "28 Rue de la Mairie, 82370 Campsas",
    courts: 1,
    image: "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    link: "/campsas",
  },
];

const NosPadel = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false); // ✅ Gère l'ouverture du panneau

  // 🔎 Filtrer les terrains selon la recherche
  const filteredTerrains = terrains.filter((terrain) =>
    terrain.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="nos-padel-container">
      {/* 🗺️ Carte interactive */}
      <div className="map-container">
        <MapContainer center={[43.85, 1.35]} zoom={10} className="map">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://carto.com/">CARTO</a>' />
          <MarkerClusterGroup>
            {terrains.map((terrain) => (
              <Marker key={terrain.id} position={terrain.position} icon={padelIcon}>
                <Popup>
                  <div className="popup-content">
                    <h3>{terrain.name}</h3>
                    <p>{terrain.address}</p>
                    <p>Terrains disponibles : {terrain.courts}</p>
                    <Link to={terrain.link}>Voir plus</Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>

      {/* 📜 Panneau des widgets */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-handle" onClick={() => setOpen(!open)}></div> {/* 🔽 Bouton de glissement */}

        <h2>Rechercher un Padel</h2>
        <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <p>{filteredTerrains.length} terrains trouvés</p>
        {filteredTerrains.map((terrain) => (
          <div key={terrain.id} className="terrain-card">
            <img src={terrain.image} alt={terrain.name} className="terrain-image" />
            <h3>{terrain.name}</h3>
            <p>{terrain.address}</p>
            <Link to={terrain.link}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NosPadel;
