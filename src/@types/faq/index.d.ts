import { valueOf } from '../common';
import { FAQ_RESULT } from '../../const/faq';

export type FAQ_TYPE = {
	id: number;
	question: string;
	answer: string;
};

export type RESULT_TYPE = typeof FAQ_RESULT;
export type RESULT_KEYS = keyof RESULT_TYPE;
export type RESULT_VALUES = valueOf<RESULT_TYPE>;
