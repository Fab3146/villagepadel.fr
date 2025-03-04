<div className="flex flex-col md:flex-row h-screen">
  {/* 📝 Panneau latéral gauche */}
  <div className="w-full md:w-1/3 bg-white p-6 overflow-y-auto shadow-lg">
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
      <div key={terrain.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <img src={terrain.image} alt={terrain.name} className="w-full h-32 object-cover rounded-md mb-2" />
        <h3 className="text-lg font-semibold">{terrain.name}</h3>
        <p className="text-sm text-gray-500">{terrain.address}</p>
        <Link to={terrain.link} className="mt-2 block bg-brand-orange text-white px-4 py-2 rounded-lg text-center hover:bg-brand-orange-dark transition">
          Voir plus
        </Link>
      </div>
    ))}
  </div>

  {/* 🗺️ Carte interactive */}
  <div className="w-full md:w-2/3 h-96 md:h-full">
    <MapContainer center={[43.85, 1.35]} zoom={10} className="h-full w-full">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <MarkerClusterGroup>
        {terrains.map((terrain) => (
          <Marker key={terrain.id} position={terrain.position} icon={padelIcon}>
            <Popup>
              <div className="text-center">
                <h3 className="text-lg font-bold">{terrain.name}</h3>
                <p className="text-sm text-gray-500">{terrain.address}</p>
                <p className="text-sm">Terrains disponibles : {terrain.courts}</p>
                <Link to={terrain.link} className="mt-2 inline-block bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange-dark transition">
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


