import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import categoryreducer from "../features/products/categorySlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryreducer,
  },
});
