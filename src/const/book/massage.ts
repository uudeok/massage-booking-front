export const MASSAGE_ITEM = {
  DRY_MASSAGE: "건식 마사지",
  OIL_MASSAGE: "오일 마사지",
  MANUAL_THERAPY_MASSAGE: "체형교정 마사지",
  YOUTH_MASSAGE: "청소년 마사지",
  SKIN_THERAPY_MASSAGE: "피부 마사지",
} as const;

export const BOOKING_NOTICE = [
  { content: "결제는 현장에서 진행 됩니다.", id: 1 },
  {
    content: "예약 시간 10분 전에는 방문을 부탁드립니다.",
    id: 2,
  },
  {
    content:
      "예약이 들어온 순서대로 진행 되고 있어 예약이 취소 될 수 있습니다.",
    id: 3,
  },
  {
    content: "예약 내역 및 취소는 마이페이지에서 확인하실 수 있습니다.",
    id: 4,
  },
  {
    content: "연락 없이 10분 동안 방문 하지 않으면 예약은 자동 취소됩니다.",
    id: 5,
  },
  {
    content:
      "연락 없이 방문 하지 않을 경우 추후 예약 시 페널티가 부과 될 수 있습니다. ",
    id: 6,
  },
];
