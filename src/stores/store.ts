import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import massageSlice from "./massageSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    massage: massageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
