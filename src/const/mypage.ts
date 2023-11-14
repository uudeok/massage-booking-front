import { MY_BOOK_LIST_TYPE } from "../@types/mypage";

export const MY_PAGE_TABLE = [
  { key: "book", value: "나의 예약" },
  { key: "mileage", value: "적립금" },
  { key: "setting", value: "개인정보수정" },
];

export const ORDER_STATUS = {
  requesting: "요청중",
  confirmed: "예약확정",
  completed: "예약완료",
  cancel: "예약취소",
} as const;

// 최신순으로 가져오기
// 유저 정보도 물고 있어야함

export const MY_BOOK_LIST: MY_BOOK_LIST_TYPE[] = [
  {
    orderDate: "2023-11-05",
    orderItem: "DRY_MASSAGE",
    massageDate: "2023-11-06",
    massageTime: "11:00 - 12:00",
    orderPrice: 70000,
    orderStatus: "requesting",
    id: 4,
  },
  {
    orderDate: "2023-10-26",
    orderItem: "DRY_MASSAGE",
    massageDate: "2023-10-30",
    massageTime: "14:00 - 15:00",
    orderPrice: 60000,
    orderStatus: "confirmed",
    id: 3,
  },
  {
    orderDate: "2023-10-07",
    orderItem: "OIL_MASSAGE",
    massageDate: "2023-10-10",
    massageTime: "09:00 - 10:00",
    orderPrice: 60000,
    orderStatus: "cancel",
    id: 2,
  },
  {
    orderDate: "2023-09-15",
    orderItem: "DRY_MASSAGE",
    massageDate: "2023-09-16",
    massageTime: "11:00 - 12:00",
    orderPrice: 70000,
    orderStatus: "completed",
    id: 1,
  },
];
