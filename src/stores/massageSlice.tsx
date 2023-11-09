import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TMassageDetail, TMassageTable } from "../@types/massage";
import { massageApi } from "../api/massage/massageQuery";

type TInitialState = {
  massageDetail: TMassageDetail[];
  massageItem: TMassageTable;
  massageId: number;
  massageType: number;
};

const initialState: TInitialState = {
  massageDetail: [],
  massageItem: {} as TMassageTable,
  massageId: 0,
  massageType: 0,
};

export const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    getSelectedMassageId(state, action) {
      state.massageId = action.payload;
    },
    getSelectedMassageType(state, action) {
      state.massageType = action.payload;
      state.massageDetail = state.massageItem.detail.filter(
        (item) => item.time === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      massageApi.endpoints.getMassageItem.matchFulfilled,
      (state, action) => {
        state.massageItem = action.payload;
      }
    );
  },
});

export const getMassageItem = (state: RootState) => state.massage.massageItem;
export const getMassageDetail = (state: RootState) =>
  state.massage.massageDetail;
export const getMassageId = (state: RootState) => state.massage.massageId;
export const getMassageType = (state: RootState) => state.massage.massageType;

export const { getSelectedMassageId, getSelectedMassageType } =
  massageSlice.actions;

export default massageSlice.reducer;
