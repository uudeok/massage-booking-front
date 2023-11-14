import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TMassageDetail, TMassageTable } from "../@types/massage";
import { massageApi } from "../api/massage/massageQuery";

type TInitialState = {
  selectedMassageItem: TMassageTable;
  selectedMassageDetail: TMassageDetail[];
  massageId: number;
};

const initialState: TInitialState = {
  selectedMassageItem: {} as TMassageTable,
  selectedMassageDetail: [],
  massageId: 0,
};

export const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    getSelectedMassageId(state, action) {
      state.massageId = action.payload;
    },
    getSelectedMassageType(state, action) {
      state.selectedMassageDetail = state.selectedMassageItem.detail.filter(
        (item) => item.time === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      massageApi.endpoints.getMassageItem.matchFulfilled,
      (state, action) => {
        state.selectedMassageItem = action.payload;
      }
    );
  },
});

export const getMassageItem = (state: RootState) =>
  state.massage.selectedMassageItem;
export const getMassageDetail = (state: RootState) =>
  state.massage.selectedMassageDetail;
export const getMassageId = (state: RootState) => state.massage.massageId;

export const { getSelectedMassageId, getSelectedMassageType } =
  massageSlice.actions;

export default massageSlice.reducer;
