export const ORDER_STATUS = {
	PENDING: '요청중',
	CONFIRM: '예약확정',
	CANCEL: '취소',
	COMPLETED: '완료',
} as const;

export const MY_ORDER_TABLE_HEADER = ['예약일자', '상품정보', '예약상세', '금액', '예약처리상태'];
