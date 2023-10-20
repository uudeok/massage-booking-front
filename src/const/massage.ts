import { IMassageTable } from "../@types/book";

interface IBookingItem {
  [key: string]: string;
}
export const BOOKING_ITEM: IBookingItem = {
  DRY_MASSAGE: "건식 마사지",
  OIL_MASSAGE: "습식 마사지",
  MANUAL_THERAPY: "체형교정 마사지",
  YOUTH_MASSAGE: "청소년 마사지",
  SKIN_THERAPY: "피부 마사지",
};

export const BOOKING_MASSAGE_TABLE: IMassageTable[] = [
  {
    img: "dry.jpg",
    item: "DRY_MASSAGE",
    id: 1,
    content: "오일을 사용하지 않은 지압식 마사지",
    detail: [
      { time: 60, price: 60000, id: 1, massageId: 1 },
      { time: 90, price: 80000, id: 2, massageId: 1 },
      { time: 120, price: 100000, id: 3, massageId: 1 },
    ],
  },
  {
    img: "oil.jpg",
    item: "OIL_MASSAGE",
    id: 2,
    content: "피로 회복과 피부 탄력에 좋은 힐링식 아로마 마사지",
    detail: [
      { time: 60, price: 60000, id: 1, massageId: 2 },
      { time: 90, price: 80000, id: 2, massageId: 2 },
    ],
  },
  {
    img: "manual.jpg",
    item: "MANUAL_THERAPY",
    id: 3,
    content: "마사지와 체형 교정을 한번에 받을 수 있는 체형교정 마사지",
    detail: [
      { time: 60, price: 70000, id: 1, massageId: 3 },
      { time: 90, price: 90000, id: 2, massageId: 3 },
      { time: 120, price: 110000, id: 3, massageId: 3 },
    ],
  },
  {
    img: "youth.jpg",
    item: "YOUTH_MASSAGE",
    id: 4,
    content: "학업에 지친 아이들, 거북목 및 체형 교정",
    detail: [
      { time: 60, price: 50000, id: 1, massageId: 4 },
      { time: 90, price: 70000, id: 2, massageId: 4 },
    ],
  },
  {
    img: "skin.jpg",
    item: "SKIN_THERAPY",
    id: 5,
    content: "피부 테라피에 초점을 맞춘 마사지",
    detail: [
      { time: 60, price: 70000, id: 1, massageId: 5 },
      { time: 90, price: 90000, id: 2, massageId: 5 },
    ],
  },
];

export const TIME_TABLE = [
  {
    startTime: "09:00:00",
    endTime: "10:00:00",
    type: "free",
    date: new Date(),
    id: 1,
  },
  {
    startTime: "10:00:00",
    endTime: "11:00:00",
    type: "free",
    date: new Date(),
    id: 2,
  },
  {
    startTime: "11:00:00",
    endTime: "12:00:00",
    type: "book",
    date: new Date(),
    id: 3,
  },
  {
    startTime: "12:00:00",
    endTime: "13:00:00",
    type: "free",
    date: new Date(),
    id: 4,
  },
  {
    startTime: "13:00:00",
    endTime: "14:00:00",
    type: "free",
    date: new Date(),
    id: 5,
  },
  {
    startTime: "14:00:00",
    endTime: "15:00:00",
    type: "book",
    date: new Date(),
    id: 6,
  },
  {
    startTime: "15:00:00",
    endTime: "16:00:00",
    type: "free",
    date: new Date(),
    id: 7,
  },
  {
    startTime: "16:00:00",
    endTime: "17:00:00",
    type: "free",
    date: new Date(),
    id: 8,
  },
  {
    startTime: "17:00:00",
    endTime: "18:00:00",
    type: "book",
    date: new Date(),
    id: 9,
  },
  {
    startTime: "18:00:00",
    endTime: "19:00:00",
    type: "free",
    date: new Date(),
    id: 10,
  },
  {
    startTime: "19:00:00",
    endTime: "20:00:00",
    type: "free",
    date: new Date(),
    id: 11,
  },
  {
    startTime: "20:00:00",
    endTime: "21:00:00",
    type: "free",
    date: new Date(),
    id: 12,
  },
];
