import { valueOf } from '../common';

export type FAQ_TYPE = {
	id: number;
	question: string;
	answer: string;
};

export const RESULT = {
	success: 'SUCCESS',
	failed: 'FAILED',
} as const;

export type RESULT_TYPE = typeof RESULT;
export type RESULT_KEYS = keyof RESULT_TYPE;
export type RESULT_VALUES = valueOf<RESULT_TYPE>;
