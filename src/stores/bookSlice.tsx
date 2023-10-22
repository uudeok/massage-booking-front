import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  detail: [
    { time: 60, price: 60000, id: 1, massageId: 1 },
    { time: 90, price: 80000, id: 2, massageId: 1 },
    { time: 120, price: 100000, id: 3, massageId: 1 },
    { time: 60, price: 60000, id: 1, massageId: 2 },
    { time: 90, price: 80000, id: 2, massageId: 2 },
    { time: 60, price: 70000, id: 1, massageId: 3 },
    { time: 90, price: 90000, id: 2, massageId: 3 },
    { time: 120, price: 110000, id: 3, massageId: 3 },
    { time: 60, price: 50000, id: 1, massageId: 4 },
    { time: 90, price: 70000, id: 2, massageId: 4 },
    { time: 60, price: 70000, id: 1, massageId: 5 },
    { time: 90, price: 90000, id: 2, massageId: 5 },
  ],
  massage: [
    {
      img: "건식.jpg",
      item: "DRY_MASSAGE",
      id: 1,
      content:
        "오일을 사용하지 않은 지압식 마사지로 뭉친 근육을 시원하게 풀어드립니다.",
      detail: [
        { time: 60, price: 60000, id: 1, massageId: 1 },
        { time: 90, price: 80000, id: 2, massageId: 1 },
        { time: 120, price: 100000, id: 3, massageId: 1 },
      ],
    },
    {
      img: "습식.jpg",
      item: "OIL_MASSAGE",
      id: 2,
      content: "피로 회복과 피부 탄력에 좋은 힐링식 아로마 마사지",
      detail: [
        { time: 60, price: 60000, id: 1, massageId: 2 },
        { time: 90, price: 80000, id: 2, massageId: 2 },
      ],
    },
    {
      img: "교정.jpg",
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
      img: "청소년.jpg",
      item: "YOUTH_MASSAGE",
      id: 4,
      content:
        "학업에 지친 아이들, 거북목 및 체형 교정으로 숨은 키를 찾아드려요",
      detail: [
        { time: 60, price: 50000, id: 1, massageId: 4 },
        { time: 90, price: 70000, id: 2, massageId: 4 },
      ],
    },
    {
      img: "피부.jpg",
      item: "SKIN_THERAPY",
      id: 5,
      content: "피부 테라피에 초점을 맞춘 마사지",
      detail: [
        { time: 60, price: 70000, id: 1, massageId: 5 },
        { time: 90, price: 90000, id: 2, massageId: 5 },
      ],
    },
  ],

  availableTime: [
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
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getMassageItem(state, action) {
      state.massage = state.massage.filter(
        (masg) => masg.id === action.payload
      );
    },
    getMassageDetailTime(state, action) {
      state.detail = state.detail.filter(
        (item) =>
          item.massageId === action.payload.massageId &&
          item.time === action.payload.massageTime
      );
    },
    getAvailableDate(state, action) {
      state.availableTime = state.availableTime.filter(
        (item) => item.id === action.payload
      );
    },
  },
});

export const { getMassageItem, getMassageDetailTime, getAvailableDate } =
  bookSlice.actions;
export default bookSlice.reducer;