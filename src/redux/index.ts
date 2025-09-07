import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/ProductSlice"

export const store = configureStore({
  reducer: {
    product: productSlice
  }
})