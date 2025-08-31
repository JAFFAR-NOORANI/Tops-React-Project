import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const displayProduct = createAsyncThunk("displayProduct", async () => {
  const resp = await fetch("https://tops-react-project.onrender.com/products");
  console.log(resp);
  const data = await resp.json();
console.log("Fetched data:", data);
return data;


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
    builder.addCase(displayProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Data inside slice (fulfilled):", action.payload);

      state.data = action.payload;
    });
    builder.addCase(displayProduct.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
