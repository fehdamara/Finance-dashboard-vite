// Slice Redux per gestire l'autenticazione e il ruolo dell'utente
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    role: null,
  },
  reducers: {
    // Azione di login che imposta l'autenticazione e il ruolo
    login(state, action) {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    // Azione di logout che resetta lo stato
    logout(state) {
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

