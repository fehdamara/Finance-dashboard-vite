// File di configurazione dello store Redux, dove combiniamo tutti i reducer
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Slice per l'autenticazione
import transactionReducer from "./transactionSlice"; // Slice per le transazioni


export default configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
});

