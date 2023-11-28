import LoginModal from "../modal/LoginModal";

export const MODAL_TYPE = {
  LoginModal: "LoginModal",
} as const;

export const MODAL_COMPONENTS = {
  [MODAL_TYPE.LoginModal]: LoginModal,
};
