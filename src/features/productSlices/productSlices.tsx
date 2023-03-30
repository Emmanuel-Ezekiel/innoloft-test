import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../api/Api";
import type { RootState } from "../../store/store";

type State = {
  loading: boolean;
  error: any;
  getProduct: any;
};

const initialState: State = {
  loading: false,
  getProduct: null,
  error: null,
};

const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.getProduct = action?.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectData = (state: RootState) => state.product;

export default productSlice.reducer;
