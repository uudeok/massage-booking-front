import { BOOKING_TYPE } from "../../const/book/massage";
import { valueOf } from "../common";

export type BOOKING_TIME_TYPE = typeof BOOKING_TYPE;
export type BOOKING_TIME_TYPE_KEYS = keyof BOOKING_TIME_TYPE;
export type BOOKING_TIME_TYPE_VALUE = valueOf<BOOKING_TIME_TYPE>;

export type TTimeTable = {
  startTime: string;
  type: BOOKING_TIME_TYPE_KEYS;
  date: string;
  id: number;
};
