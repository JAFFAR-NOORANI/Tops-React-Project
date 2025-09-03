import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import categoryreducer from "../features/products/categorySlice";
import userreducer from "../features/users/userSlice";
import loginreducer from "../features/users/loginSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryreducer,
    user: userreducer,
    login: loginreducer,
  },
});
