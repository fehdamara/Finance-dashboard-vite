TransactionForm.jsx
// Form per aggiungere una nuova transazione alla lista (via Redux + JSON Server)

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/transactionSlice"; // Thunk async

export default function TransactionForm() {
  const dispatch = useDispatch();

  // Stato locale per i campi del form
  const [formData, setFormData] = useState({
    description: "",
    amount: ""
  });

  // Stato per messaggi di errore
  const [error, setError] = useState(null);

  // Aggiorna lo stato man mano che l'utente digita
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Gestione dell'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione semplice: i campi devono essere compilati
    if (!formData.description || !formData.amount) {
      setError("Tutti i campi sono obbligatori.");
      return;
    }

    // Invia la nuova transazione a Redux/JSON Server
    dispatch(addTransaction({
      description: formData.description,
      amount: parseFloat(formData.amount)
    }));

    // Reset del form
    setFormData({ description: "", amount: "" });
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Aggiungi Transazione</h4>

      {/* Messaggio di errore se presente */}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label className="form-label">Descrizione</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Es. Stipendio, bolletta, spesa"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Importo (€)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="form-control"
          placeholder="Es. 1000 o -50"
        />
      </div>

      <button type="submit" className="btn btn-success">
        Aggiungi
      </button>
    </form>
  );
}
