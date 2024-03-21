import { valueOf } from "../../@types/common";
import { MONTH_NAME } from "../../const/calendar";

export type MONTH_NAME_TYPE = typeof MONTH_NAME;
export type MONTH_NAME_KEYS = keyof MONTH_NAME_TYPE;
export type MONTH_NAME_VALUES = valueOf<MONTH_NAME_TYPE>;
