import { configureStore } from "@reduxjs/toolkit";
import massageSlice from "./massageSlice";
import tabSlice from "./tabSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { massageApi } from "../api/book/bookQuery";
import { noticeApi } from "../api/notice/noticeQuery";

export const store = configureStore({
  reducer: {
    massage: massageSlice,
    tab: tabSlice,
    [massageApi.reducerPath]: massageApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(massageApi.middleware, noticeApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
