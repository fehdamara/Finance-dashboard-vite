// Pagina visibile solo agli utenti con ruolo "admin"
// Mostra un messaggio di accesso negato se l'utente non è admin
import { useSelector } from "react-redux"; // Per leggere lo stato dell'autenticazione

export default function AdminPanel() {
  const { role } = useSelector((state) => state.auth); // Ottieni il ruolo dell'utente
  // Se non è admin, mostra messaggio di accesso negato
  if (role !== "admin") return <p>Access denied. Admins only.</p>;

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage users and transactions here.</p>
    </div>
  );
}

