import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MODAL_TYPE_KEYS } from "../@types/modal";

// props 의 type 을 어떻게 지정해주지??

export type ModalType = {
  type: MODAL_TYPE_KEYS;
  props?: any;
};

const initialState: ModalType[] = [];

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, props } = action.payload;

      return state.concat({ type, props });
    },
    closeModal: (state) => {
      state.pop();
    },
  },
});

export const modalSelector = (state: RootState) => state.modal as ModalType[];
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
