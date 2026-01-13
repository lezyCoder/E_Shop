import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const updateQty = (state, productId, optType) => {
  const productIndex = state.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) return;

  const product = state[productIndex];

  if (optType === "increase") {
    product.quantity += 1;
  }

  if (optType === "decrease") {
    product.quantity -= 1;

    if (product.quantity <= 0) {
      state.splice(productIndex, 1); //  remove from cart  - this (splice) will makes changes directly to the state.
    }
  }
};

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
    removeFromCart: (state, action) => {
      // here we will check the id and filter the element.
      return state.filter((product) => product.id !== action.payload);
    },

    increaseQuantity: (state, action) => {

      // console.log("action", action.payload)
      // console.log("state", state)
      // we are passing the id in the payload (!! try to console the payload)
      const productId = action.payload.id;
      const optType = action.payload.data
      // console.log("state", product) - it will return the Proxy array -> read about it more or Chatgpt it 
      updateQty(state, productId, optType)

    },
    decreaseQuantity: (state, action) => {

      // we are passing the id in the payload (!! try to console the payload)
      const productId = action.payload.id;
      const optType = action.payload.data
      // console.log("state", product) - it will return the Proxy array -> read about it more or Chatgpt it 
      updateQty(state, productId, optType)
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
