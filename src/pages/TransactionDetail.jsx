// Pagina che mostra il dettaglio di una singola transazione
// Utilizza useParams per ottenere l'id dalla route
import { useParams } from "react-router-dom";

export default function TransactionDetail() {
  const { id } = useParams(); // Ottiene il parametro dinamico dalla URL (es: /transactions/1)
  return (
    <div>
      <h3>Transaction Detail</h3>
      <p>ID: {id}</p>
      {/* Replace with fetch call to real data *//* Qui potresti eseguire una fetch a un'API per ottenere i dettagli reali */}
    </div>
  );
}

