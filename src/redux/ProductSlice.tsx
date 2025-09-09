import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "PRODUCT",
  initialState: {
    products: []as { img: string; name: string; price: number }[],
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
