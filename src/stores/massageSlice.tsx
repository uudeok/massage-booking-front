import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  BOOKING_ITEM_KEYS,
  TMassageDetail,
  TMassageTable,
} from "../@types/massage";
import { massageApi } from "../api/massage/massageQuery";

type TInitialState = {
  selectedMassageItem: TMassageTable;
  selectedMassageDetail: TMassageDetail[];
  massageItem: BOOKING_ITEM_KEYS;
};

const initialState: TInitialState = {
  selectedMassageItem: {} as TMassageTable,
  selectedMassageDetail: [],
  massageItem: "DRY_MASSAGE",
};

export const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    setSelectedMassageItem(state, action) {
      state.massageItem = action.payload;
    },
    setSelectedMassageType(state, action) {
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

export const getSelectedMassageItem = (state: RootState) =>
  state.massage.selectedMassageItem;
export const getMassageDetail = (state: RootState) =>
  state.massage.selectedMassageDetail;
export const getMassageItem = (state: RootState) => state.massage.massageItem;

export const { setSelectedMassageItem, setSelectedMassageType } =
  massageSlice.actions;

export default massageSlice.reducer;
