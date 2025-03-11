import React from "react";

const ReservationConfirmation: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 text-center relative">
        <a
          href="https://villagepadel.netlify.app/"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold hover:opacity-80"
        >
          ← Retour
        </a>
        <h1 className="text-lg md:text-2xl font-bold">Confirmation de Réservation</h1>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
        {/* Accès aux terrains */}
        <section className="bg-white shadow-md rounded-lg p-6 flex flex-wrap items-center gap-6">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-xl font-bold text-blue-900">Accès aux Terrains et au Matériel</h2>
            <ul className="list-none mt-2 space-y-2 text-gray-700">
              <li>✅ Ouvrez l'application Village Padel</li>
              <li>✅ Accédez à la section "Accès court"</li>
              <li>✅ Choisissez entre l'accès au terrain ou au matériel</li>
            </ul>
            <div className="mt-4 bg-orange-500 text-white p-3 rounded-md">
              Assurez-vous d'avoir une connexion Internet active avant d'accéder aux terrains.
            </div>
          </div>
          <div className="flex-1 min-w-[300px] text-center">
            <img
              src="https://res.cloudinary.com/damfvriyn/image/upload/v1736002563/y5hsys1eg9eae1smgron.png"
              alt="Interface application"
              className="max-h-96 w-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Infos importantes */}
        <section className="bg-white shadow-md rounded-lg p-6 flex flex-wrap items-center gap-6">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-xl font-bold text-blue-900">Informations Importantes</h2>
            <ul className="list-none mt-2 space-y-2 text-gray-700">
              <li>⏳ Accès activé 10 min avant la réservation</li>
              <li>💡 L'éclairage s'active automatiquement la nuit</li>
              <li>🚪 Portes ouvertes 1h15 après activation</li>
              <li>🔦 Éclairage s'éteint 10 min après la réservation</li>
              <li>🚨 Sortie via le bouton poussoir</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[300px] text-center">
            <img
              src="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/481270219_122142807104570408_784936930886099981_n_yoayxg.jpg"
              alt="Padel de nuit"
              className="max-h-80 w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Accès au matériel */}
        <section className="bg-white shadow-md rounded-lg p-6 flex flex-wrap items-center gap-6">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-xl font-bold text-blue-900">Accès au Matériel</h2>
            <ul className="list-none mt-2 space-y-2 text-gray-700">
              <li>🏆 Le capitaine gère l'ouverture du terrain</li>
              <li>⏰ Retour du matériel max 10 min après</li>
              <li>⚠️ Matériel non retourné = facturation</li>
            </ul>
            <div className="mt-4 bg-orange-500 text-white p-3 rounded-md">
              La responsabilité du capitaine est engagée pour le matériel.
            </div>
          </div>
          <div className="flex-1 min-w-[300px] text-center">
            <img
              src="https://res.cloudinary.com/damfvriyn/image/upload/v1736008883/IMG_2457_nrymsw.jpg"
              alt="Matériel de padel"
              className="max-h-64 w-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Besoin d'aide ?</h2>
          <p className="text-gray-700 mt-2">Pour toute question, contactez-nous :</p>
          <p className="text-gray-800 font-semibold">📧 contact@villagepadel.fr</p>
          <p className="text-gray-800 font-semibold">📞 07 49 15 74 01</p>
          <a
            href="https://villagepadel.netlify.app/#contact"
            className="mt-4 inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition"
          >
            Nous Contacter
          </a>
        </section>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
