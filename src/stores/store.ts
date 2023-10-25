import { configureStore } from "@reduxjs/toolkit";
import massageSlice from "./massageSlice";
import bookSlice from "./bookSlice";

export const store = configureStore({
  reducer: {
    massage: massageSlice,
    book: bookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
