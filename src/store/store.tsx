import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import ProductReducer from "../features/productSlices/productSlices";
import EditReducer from "../features/editSlice/editSlice";

  export const store = configureStore({
    reducer: {
      product: ProductReducer, 
      edit: EditReducer
    },
  });
  

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
