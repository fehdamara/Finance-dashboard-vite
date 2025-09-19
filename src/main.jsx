// Punto di ingresso dell'applicazione React
// Qui viene creata e avviata l'app React collegandola a Redux e React Router


import React from "react";
import ReactDOM from "react-dom/client"; // API moderna per creare il root React 18+
import App from "./App"; // Componente principale
import { BrowserRouter } from "react-router-dom"; // Fornisce il supporto al routing
import { Provider } from "react-redux"; // Fornisce il Redux store a tutta l'app
import store from "./redux/store"; // Il Redux store configurato
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap
import "./styles/global.css"; // Importa gli stili globali definiti in CSS


// Crea il root dell'app React e renderizza l'app intera nel div con id 'root'
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}> {/* Rende disponibile lo store Redux */}
    <BrowserRouter> {/* Attiva il routing nell'app */}
    < App /> {/* Componente principale */}
    </BrowserRouter>
    </Provider>
);