import { BOOKING_ITEM, BOOKING_TYPE } from "../../const/massage";

export type valueOf<T> = T[keyof T];
export type BOOKING_ITEM_TYPE = typeof BOOKING_ITEM;
export type BOOKING_ITEM_KEYS = keyof BOOKING_ITEM_TYPE;
export type BOOKING_ITEM_VALUE = valueOf<BOOKING_ITEM_TYPE>;

export type BOOKING_TIME_TYPE = typeof BOOKING_TYPE;
export type BOOKING_TIME_TYPE_KEYS = keyof BOOKING_TIME_TYPE;
export type BOOKING_TIME_TYPE_VALUE = valueOf<BOOKING_TIME_TYPE>;

export type TMassageDetail = {
  time: number;
  price: number;
  id: number;
  massageId: number;
};

export type TMassageTable = {
  img: string;
  item: BOOKING_ITEM_KEYS;
  id: number;
  content: string;
  detail: IMassageDetail[];
};

// export type TTimeTable = {
//   startTime: string;
//   endTime: string;
//   type: BOOKING_TIME_TYPE_KEYS;
//   date: Date | string;
//   id: number;
// };

export type TTimeTable = {
  startTime: string;
  type: BOOKING_TIME_TYPE_KEYS;
  date: string;
  id: number;
};
