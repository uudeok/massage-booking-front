import { NOTICE_CATEGORY } from "../../const/notices";
import { valueOf } from "../book";

export type NOTICE_CATEGORY_TYPE = typeof NOTICE_CATEGORY;
export type NOTICE_CATEGORY_KEYS = keyof NOTICE_CATEGORY_TYPE;
export type NOTICE_CATEGORY_VALUES = valueOf<NOTICE_CATEGORY_TYPE>;

export type TNotice = {
  title: string;
  date: string;
  category: NOTICE_CATEGORY_KEYS;
  content: string;
  id: number;
  writer: string;
};
