import { NOTICE_CATEGORY } from "../../const/notices";
import { valueOf } from "../common";

export type NOTICE_CATEGORY_TYPE = typeof NOTICE_CATEGORY;
export type NOTICE_CATEGORY_KEYS = keyof NOTICE_CATEGORY_TYPE;
export type NOTICE_CATEGORY_VALUES = valueOf<NOTICE_CATEGORY_TYPE>;

export type TNoticeMeta = {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalCount: number;
};

export type TNoticeDetail = {
  category: NOTICE_CATEGORY_KEYS;
  content: string;
  createdAt: string;
  displayCategory: NOTICE_CATEGORY_VALUES;
  id: number;
  title: string;
  updatedAt: string;
  viewCount: number;
  writer: string;
};

export type NoticeType = {
  notices: TNoticeDetail[];
  meta: TNoticeMeta;
};
