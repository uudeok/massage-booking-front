export const NOTICE_CATEGORY = {
  ALL: "전체",
  BUSINESS_TIME: "영업시간",
  EVENTS: "이벤트",
  ETC: "기타",
  RULES: "운영방침",
} as const;

export const NOTICE_CATEGORIES = [
  { key: "BUSINESS_TIME", value: "영업시간" },
  { key: "EVENTS", value: "이벤트" },
  { key: "RULES", value: "운영방침" },
  { key: "ETC", value: "기타" },
] as const;
