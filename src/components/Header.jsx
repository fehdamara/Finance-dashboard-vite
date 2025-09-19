// Componente che mostra una barra di navigazione in alto con link alla home, dashboard, transazioni e pannello admin
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      {/* Link al logo o nome dell'app */}
      <Link className="navbar-brand" to="/">
        Finance Dashboard
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {/* Link a ciascuna sezione dell'app */}
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactions">Transactions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

