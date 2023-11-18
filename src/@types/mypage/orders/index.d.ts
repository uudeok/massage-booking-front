import { ORDER_STATUS } from "../../const/mypage";
import { valueOf } from "../common";
import { BOOKING_ITEM_VALUE } from "../../massage";

export type ORDER_STATUS_TYPE = typeof ORDER_STATUS;
export type ORDER_STATUS_TYPE_KEYS = keyof ORDER_STATUS_TYPE;
export type ORDER_STATUS_TYPE_VALUES = valueOf<ORDER_STATUS_TYPE>;

export type TOrderType = {
  id: number;
  price: number;
  item: BOOKING_ITEM_VALUE;
  createdAt: string;
  status: ORDER_STATUS_TYPE_KEYS;
  displayStatus: ORDER_STATUS_TYPE_VALUES;
  startReservedAt: string;
  endReservedAt: string;
};

export type TMyOrderMetaType = {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalCount: number;
};

export type MyOrderType = {
  orders: TOrderType[];
  meta: TMyOrderMetaType;
};
