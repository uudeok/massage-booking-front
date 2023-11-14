import { MODAL_TYPE_KEYS } from "../../@types/modal";
import ConfirmModal from "../common/UI/modal/ConfirmModal";
import LoginModal from "../common/UI/modal/LoginModal";
import NoticeModal from "../common/UI/modal/NoticeModal";
import TwoBtnModal from "../common/UI/modal/TwoBtnModal";

type MODAL_COMPONENT_TYPE = {
  [key: MODAL_TYPE_KEYS]: (props: any) => JSX.Element;
};

export const MODAL_TYPE = {
  NoticeModal: NoticeModal,
  LoginModal: LoginModal,
  TwoBtnModal: TwoBtnModal,
  ConfirmModal: ConfirmModal,
} as const;

export const MODAL_COMPONENTS: MODAL_COMPONENT_TYPE = {
  NoticeModal: NoticeModal,
  LoginModal: LoginModal,
  TwoBtnModal: TwoBtnModal,
  ConfirmModal: ConfirmModal,
};
