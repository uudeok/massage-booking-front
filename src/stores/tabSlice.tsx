import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  tabNum: 0,
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    resetTabNum(state) {
      state.tabNum = 0;
    },
    addTabNum(state) {
      state.tabNum = state.tabNum + 1;
    },
    subTabNum(state) {
      state.tabNum = state.tabNum - 1;
    },
  },
});

export const { resetTabNum, addTabNum, subTabNum } = tabSlice.actions;
export const currTabNum = (state: RootState) => state.tab.tabNum;

export default tabSlice.reducer;
