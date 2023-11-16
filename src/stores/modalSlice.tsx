import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MODAL_TYPE_VALUE } from "../@types/modal";
import { TLoginModalType } from "../components/common/UI/modal/LoginModal";
import { TOneBtnModalType } from "../components/common/UI/modal/OneBtnModal";
import { TTwoBtnModalType } from "../components/common/UI/modal/TwoBtnModal";

// props 의 type 을 어떻게 지정해주지??

export type ModalProps = TLoginModalType | TOneBtnModalType | TTwoBtnModalType;

export type ModalType = {
  type: MODAL_TYPE_VALUE;
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
