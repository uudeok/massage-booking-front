import OneBtnModal from "../common/UI/modal/OneBtnModal";
import LoginModal from "../common/UI/modal/LoginModal";
import NoticeModal from "../common/UI/modal/NoticeModal";
import TwoBtnModal from "../common/UI/modal/TwoBtnModal";

export const MODAL_TYPE = {
  NoticeModal: "NoticeModal",
  LoginModal: "LoginModal",
  TwoBtnModal: "TwoBtnModal",
  OneBtnModal: "OneBtnModal",
} as const;

export const MODAL_COMPONENTS = {
  [MODAL_TYPE.NoticeModal]: NoticeModal,
  [MODAL_TYPE.LoginModal]: LoginModal,
  [MODAL_TYPE.TwoBtnModal]: TwoBtnModal,
  [MODAL_TYPE.OneBtnModal]: OneBtnModal,
};
