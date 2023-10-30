import { NOTICE_CATEGORIES } from "../../const/notices";
import { valueOf } from "../book";

export type NOTICE_CATEGORIES_TYPE = typeof NOTICE_CATEGORIES;
export type NOTICE_CATEGORIES_KEYS = keyof NOTICE_CATEGORIES_TYPE;
export type NOTICE_CATEGORIES_VALUES = valueOf<NOTICE_CATEGORIES_TYPE>;

export type TNotice = {
  title: string;
  date: string;
  category: NOTICE_CATEGORIES_KEYS;
  content: string;
  id: number;
  auth: string;
};
