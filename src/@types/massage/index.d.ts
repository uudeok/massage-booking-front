import { MASSAGE_ITEM } from "../../const/book/massage";
import { valueOf } from "../common";

export type BOOKING_ITEM_TYPE = typeof MASSAGE_ITEM;
export type BOOKING_ITEM_KEYS = keyof BOOKING_ITEM_TYPE;
export type BOOKING_ITEM_VALUE = valueOf<BOOKING_ITEM_TYPE>;

export type TMassageDetail = {
  time: number;
  price: number;
  id: number;
  massageId: number;
};

export type TMassageTable = {
  image: string;
  item: BOOKING_ITEM_KEYS;
  id: number;
  content: string;
  details: IMassageDetail[];
};
