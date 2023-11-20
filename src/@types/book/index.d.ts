import { BOOKING_TYPE } from "../../const/book/time";
import { valueOf } from "../common";

export type BOOKING_TIME_TYPE = typeof BOOKING_TYPE;
export type BOOKING_TIME_TYPE_KEYS = keyof BOOKING_TIME_TYPE;
export type BOOKING_TIME_TYPE_VALUE = valueOf<BOOKING_TIME_TYPE>;

const DAY_OF_WEEK = {
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  saturday: "saturday",
  sunday: "sunday",
} as const;

export type TTimeTable = {
  startTime: string;
  type: BOOKING_TIME_TYPE_KEYS;
  date: string;
  id: number;
};

export type TBookType = {
  targetDate: string;
  startReservedTime: string;
  endReservedTime: string;
  dayOfWeek: keyof typeof DAY_OF_WEEK;
  itemId: number;
  tutorId: number;
};
