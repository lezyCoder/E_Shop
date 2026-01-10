import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../Axios/axios";

const initialState = {
  items: [],
  isloading: false,
  error: null,
};

// Creating the thunk
export const fetchItems = createAsyncThunk(
  "/products",
  // This function is payload data creator.
  async (query) => {
    const response = await fetchProducts(query);
    console.log("response", response);
    return response; // this is payload data
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // on pending state we will mark the loading true
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isloading = true;
    });

    // on fulfilled state we will  push the fetched data to the items array and mark the loading false
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      (state.isloading = false), (state.items = action.payload);
    });

    // on rejected state we will mark the error
    builder.addCase(fetchItems.rejected, (state, action) => {
      (state.isloading = false), (state.error = action.error.message);
    });
  },
});

export default productSlice.reducer;
