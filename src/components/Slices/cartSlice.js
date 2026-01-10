import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // retriving the id of the product
      const productId = action.payload.id;

      // finding the product on the basis of the id
      const product = state.find((product) => product.id === productId);

      // product already in the cart then increase its count
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 }); // otherwise give it a count 1.
      }
    },
    deleteFromCart: (state, action) => {
      // here we will check the id and filter the element.
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
