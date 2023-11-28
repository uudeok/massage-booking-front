export const MY_PAGE_TABLE = [
  { key: "order", value: "나의 예약" },
  { key: "information", value: "회원정보" },
  { key: "withdraw", value: "회원탈퇴" },
];

export const ORDER_STATUS = {
  PENDING: "요청중",
  CONFIRM: "예약확정",
  CANCEL: "취소",
  COMPLETED: "완료",
} as const;
