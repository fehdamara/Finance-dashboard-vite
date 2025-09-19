// Pagina del dashboard, con contenuto diverso a seconda del ruolo dell'utente
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { role } = useSelector((state) => state.auth); // Recupera il ruolo dallo stato

  return (
    <div>
      <h2>{role === "admin" ? "Admin" : "User"} Dashboard</h2>
      <p>Here is your financial overview.</p>
    </div>
  );
}

