import { MODAL_TYPE } from "../../components/globalModal/ModalContainer";
import { valueOf } from "../common";

export type MODAL_TYPE_TYPE = typeof MODAL_TYPE;
export type MODAL_TYPE_KEYS = keyof MODAL_TYPE;
export type MODAL_TYPE_VALUE = valueOf<MODAL_TYPE_TYPE>;

export type MODAL_COMPONENTS_TYPE = {
  type: MODAL_TYPE_KEYS;
  children: MODAL_TYPE_VALUE;
};
