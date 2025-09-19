// Slice Redux per gestire lo stato delle transazioni e le operazioni asincrone
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for JSON Server
const API_URL = "http://localhost:3000/transactions";

// Thunk: Fetch transactions // Thunk asincrono per caricare le transazioni
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Thunk: Add new transaction // Thunk per aggiungere una nuova transazione
export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
  }
);

// Thunk: Delete transaction // Thunk per eliminare una transazione
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export default transactionSlice.reducer;

