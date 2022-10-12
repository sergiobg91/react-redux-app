import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: "",
  productList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.totalCount += 1;
    }
  }
});

// destructura los actions creators de los reducer (forma obligatoria)
export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
