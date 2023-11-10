import { createSlice } from "@reduxjs/toolkit";
import { TSelectedItem } from "../components/booking/BookingDate";
import { RootState } from "./store";

type TInitialState = {
  selectedTimeDetail: TSelectedItem;
};

const initialState = {
  selectedTimeDetail: {},
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    getSelectedTimeDetail(state, action) {
      state.selectedTimeDetail = action.payload;
    },
  },
});

export const getTimeDetail = (state: RootState) =>
  state.time.selectedTimeDetail;

export const { getSelectedTimeDetail } = timeSlice.actions;
export default timeSlice.reducer;
