import { configureStore } from "@reduxjs/toolkit";
import massageSlice from "./massageSlice";

export const store = configureStore({
  reducer: {
    massage: massageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
