// src/store/slices/categoriesSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../core/apis/homeAPI";

// Async thunk - just call your existing fetchCategories function
export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategories(); 
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 
        error.message || 
        "Failed to fetch categories"
      );
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetCategories: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;