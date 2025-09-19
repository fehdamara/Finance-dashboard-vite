// Pagina che mostra l'elenco delle transazioni
// In futuro potrà essere connessa a Redux o a un'API per caricare i dati dinamicamente
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/transactionSlice";
import { Link } from "react-router-dom";
import TransactionForm from "./TransactionForm"; //  Importa il form

export default function Transactions() {
  const dispatch = useDispatch();

  // Stato globale: transazioni
  const { items: transactions, loading, error } = useSelector(
    (state) => state.transactions
  );

  // Quando il componente è montato, recupera le transazioni
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <h2>Transazioni</h2>

      {/* Form per aggiunta nuova transazione */}
      <TransactionForm />

      {/* Loading indicator */}
      {loading && <p>Caricamento in corso...</p>}
      {error && <p className="text-danger">Errore: {error}</p>}

      {/* Lista delle transazioni esistenti */}
      <ul className="list-group mt-4">
        {transactions.map((tx) => (
          <li className="list-group-item" key={tx.id}>
            <Link to={`/transactions/${tx.id}`}>
              {tx.description}: €{tx.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


