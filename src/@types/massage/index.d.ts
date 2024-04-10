import { MASSAGE_ITEM } from '../../const/book/massage';
import { valueOf } from '../common';

export type BOOKING_ITEM_TYPE = typeof MASSAGE_ITEM;
export type BOOKING_ITEM_KEYS = keyof BOOKING_ITEM_TYPE;
type VALUES = BOOKING_ITEM_TYPE[BOOKING_ITEM_KEYS];

export type BOOKING_ITEM_VALUE = valueOf<BOOKING_ITEM_TYPE>;

export type TMassageDetail = {
	time: number;
	unit: string;
	price: number;
};

export type TMassageTable = {
	image: string;
	item: BOOKING_ITEM_KEYS;
	id: number;
	content: string;
	detail: IMassageDetail[];
	createdAt: string;
	displayItem: BOOKING_ITEM_VALUE;
	updatedAt: string;
};
