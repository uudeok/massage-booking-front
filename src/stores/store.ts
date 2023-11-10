import { configureStore } from "@reduxjs/toolkit";
import massageSlice from "./massageSlice";
import tabSlice from "./tabSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { massageApi } from "../api/massage/massageQuery";
import { noticeApi } from "../api/notice/noticeQuery";
import { timeApi } from "../api/book/timeQuery";
import timeSlice from "./timeSlice";

export const store = configureStore({
  reducer: {
    massage: massageSlice,
    time: timeSlice,
    tab: tabSlice,
    [massageApi.reducerPath]: massageApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
    [timeApi.reducerPath]: timeApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      massageApi.middleware,
      noticeApi.middleware,
      timeApi.middleware
    ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
