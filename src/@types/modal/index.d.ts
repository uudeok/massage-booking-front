import { MODAL_TYPE } from "../../components/globalModal/ModalStore";
import { valueOf } from "../common";

export type MODAL_TYPE_TYPE = typeof MODAL_TYPE;
export type MODAL_TYPE_KEYS = keyof MODAL_TYPE;
export type MODAL_TYPE_VALUE = valueOf<MODAL_TYPE_TYPE>;
