import { TNoticeCategory } from "../@types/notice";

export const NOTICE_CATEGORY = {
  BUSINESS_TIME: "영업시간",
  EVENT: "이벤트",
  ETC: "기타",
  RULE: "운영방침",
} as const;

export const NOTICE_CATEGORIES = [
  { key: "BUSINESS_TIME", value: "영업시간" },
  { key: "EVENT", value: "이벤트" },
  { key: "RULE", value: "운영방침" },
  { key: "ETC", value: "기타" },
] as TNoticeCategory[];

export type Option = {
  label: string;
  value: string;
  selectable: boolean;
};
