import { BOOKING_ITEM_KEYS } from "../massage";
import { ORDER_STATUS } from "../../const/mypage";
import { valueOf } from "../common";

export type ORDER_STATUS_TYPE = typeof ORDER_STATUS;
export type ORDER_STATUS_TYPE_KEYS = keyof ORDER_STATUS_TYPE;
export type ORDER_STATUS_TYPE_VALUES = valueOf<ORDER_STATUS_TYPE>;

export type MY_BOOK_LIST_TYPE = {
  orderDate: string;
  orderItem: BOOKING_ITEM_KEYS;
  massageDate: string;
  massageTime: string;
  orderPrice: number;
  orderStatus: ORDER_STATUS_TYPE_KEYS;
  id: number;
};
