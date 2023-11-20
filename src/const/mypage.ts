export const MY_PAGE_TABLE = [
  { key: "order", value: "나의 예약" },
  { key: "mileage", value: "적립금" },
  { key: "setting", value: "개인정보수정" },
];

export const ORDER_STATUS = {
  PENDING: "요청중",
  CONFIRM: "예약확정",
  CANCEL: "취소",
  COMPLETED: "완료",
} as const;
