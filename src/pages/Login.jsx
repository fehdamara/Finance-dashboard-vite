// Pagina di login fittizio che simula l'autenticazione dell'utente e imposta il ruolo nello store
import { useDispatch } from "react-redux"; // Hook per inviare azioni a Redux
import { login } from "../redux/authSlice"; // Azione login definita nel slice auth

export default function Login() {
  const dispatch = useDispatch();

  // Simula login impostando il ruolo scelto
  const handleLogin = (role) => {
    dispatch(login({ role }));
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      {/* Pulsanti per scegliere il ruolo con cui loggarsi */}
      <button className="btn btn-primary me-2" onClick={() => handleLogin("user")}>
        Login as User
      </button>
      <button className="btn btn-secondary" onClick={() => handleLogin("admin")}>
        Login as Admin
      </button>
    </div>
  );
}

