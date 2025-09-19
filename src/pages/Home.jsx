// Pagina principale con sfondo, overlay e bottone

import { Link } from "react-router-dom";
import "../styles/global.css"; // Importa gli stili globali

export default function Home() {
  return (
    <div className="home-background">
      {/* Overlay trasparente sopra l'immagine */}
      <div className="home-overlay"></div>

      {/* Contenuto centrato sopra l'overlay */}
      <div className="home-content d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Benvenuto nel Finance Dashboard</h1>
        <p className="text-center">Track your spending and manage your finances smartly.</p>

        {/* Bottone per login */}
        <Link to="/login" className="btn btn-light mt-3">
          Inizia Ora
        </Link>
      </div>
    </div>
  );
}

