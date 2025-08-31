import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const displayProduct = createAsyncThunk("displayProduct", async () => {
  const resp = fetch("http://localhost:3000/products");
  return (await resp).json();
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(displayProduct.pending, (state) => {
      state.isLoading = true;
    });
     builder.addCase(displayProduct.fulfilled, (state,action) => {
      state.isLoading = false;
      state.data = action.payload
    });
    builder.addCase(displayProduct.rejected, (state) => {
        state.isError = true
    })
  },
});

export default productSlice.reducer
