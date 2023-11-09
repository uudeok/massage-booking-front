import { TTimeTable } from "../@types/massage";

export const BOOKING_ITEM = {
  DRY_MASSAGE: "건식 마사지",
  OIL_MASSAGE: "습식 마사지",
  MANUAL_THERAPY: "체형교정 마사지",
  YOUTH_MASSAGE: "청소년 마사지",
  SKIN_THERAPY: "피부 마사지",
} as const;

export const BOOKING_TYPE = {
  FREE: "예약가능",
  BOOK: "예약",
  PENDING: "대기중",
  CLOSE: "마감",
} as const;

export const BOOKING_TIME_TABLE: TTimeTable[] = [
  {
    startTime: "09:00:00",
    endTime: "10:00:00",
    type: "FREE",
    date: new Date(),
    id: 1,
  },
  {
    startTime: "10:00:00",
    endTime: "11:00:00",
    type: "FREE",
    date: new Date(),
    id: 2,
  },
  {
    startTime: "11:00:00",
    endTime: "12:00:00",
    type: "BOOK",
    date: new Date(),
    id: 3,
  },
  {
    startTime: "12:00:00",
    endTime: "13:00:00",
    type: "FREE",
    date: new Date(),
    id: 4,
  },
  {
    startTime: "13:00:00",
    endTime: "14:00:00",
    type: "FREE",
    date: new Date(),
    id: 5,
  },
  {
    startTime: "14:00:00",
    endTime: "15:00:00",
    type: "BOOK",
    date: new Date(),
    id: 6,
  },
  {
    startTime: "15:00:00",
    endTime: "16:00:00",
    type: "FREE",
    date: new Date(),
    id: 7,
  },
  {
    startTime: "16:00:00",
    endTime: "17:00:00",
    type: "FREE",
    date: new Date(),
    id: 8,
  },
  {
    startTime: "17:00:00",
    endTime: "18:00:00",
    type: "BOOK",
    date: new Date(),
    id: 9,
  },
  {
    startTime: "18:00:00",
    endTime: "19:00:00",
    type: "FREE",
    date: new Date(),
    id: 10,
  },
  {
    startTime: "19:00:00",
    endTime: "20:00:00",
    type: "FREE",
    date: new Date(),
    id: 11,
  },
  {
    startTime: "20:00:00",
    endTime: "21:00:00",
    type: "FREE",
    date: new Date(),
    id: 12,
  },
];
