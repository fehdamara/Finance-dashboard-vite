// Questo è il file principale che contiene la configurazione delle route e l'importazione dei componenti principali
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Importa le pagine
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionDetail from "./pages/TransactionDetail";
import AdminPanel from "./pages/AdminPanel";

// Importa i componenti comuni
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  // Stato per la modalità tema (light o dark)
  const [theme, setTheme] = useState(() => {
    // Recupera il tema salvato, altrimenti usa 'light'
    return localStorage.getItem("theme") || "light";
  });

  // Applica il tema al body ogni volta che cambia
  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    // Salva il tema in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle tra light e dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Header comune a tutte le pagine */}
      <Header />

      {/* Pulsante per cambiare tema visibile sopra il layout */}
      <div className="text-end px-4 mt-2">
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      {/* Layout principale con Sidebar a sinistra e contenuto a destra */}
      <div className="d-flex">
        {/* Sidebar a sinistra, barra laterale con link di navigazione */}
        <Sidebar />

        {/* Contenuto principale a destra */}
        <div className="flex-grow-1 ms-5 ps-4 pt-4">
          <Routes>
            {/* Route per la homepage */}
            <Route path="/" element={<Home />} />
            {/* Route per la pagina di login */}
            <Route path="/login" element={<Login />} />
            {/* Route per il dashboard dell'utente/admin */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Route per la lista delle transazioni */}
            <Route path="/transactions" element={<Transactions />} />
            {/* Route dinamica per il dettaglio di una singola transazione */}
            <Route path="/transactions/:id" element={<TransactionDetail />} />
            {/* Route per il pannello di amministrazione */}
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App; // Esporta il componente principale App
