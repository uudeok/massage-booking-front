import { configureStore } from "@reduxjs/toolkit";
import massageSlice from "./massageSlice";
import tabSlice from "./tabSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { massageApi } from "../api/massage/massageQuery";
import { noticeApi } from "../api/notice/noticeQuery";
import { bookApi } from "../api/book/bookQuery";
import timeSlice from "./timeSlice";
import modalSlice from "./modalSlice";
import { ordersApi } from "../api/orders/ordersQuery";

export const store = configureStore({
  reducer: {
    massage: massageSlice,
    time: timeSlice,
    tab: tabSlice,
    modal: modalSlice,
    [massageApi.reducerPath]: massageApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      massageApi.middleware,
      noticeApi.middleware,
      bookApi.middleware,
      ordersApi.middleware
    ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
