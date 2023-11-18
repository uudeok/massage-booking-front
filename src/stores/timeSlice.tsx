import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TTimeTable } from "../@types/book";

const initialState = {
  selectedTimeDetail: [] as TTimeTable[],
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
