export const generate_URL = "http://localhost:5000";

// 1-1. 마사지 리스트가져오기
// 1-2. /:item 으로 (DRY_MASSAGE) 아이템 가져오기
export const generate_ITEM = `${generate_URL}/items`;

// 2-1. 공지사항 리스트 가져오기 params {pageSize, pageNumber, category?}
// 2-2. /:id 로 상세페이지
export const generate_NOTICE = `${generate_URL}/notices`;

// 3-1. 오더 목록 리스트(마이페이지) 가져오기 {pageSize, pageNumber}
// 3-2. 예약하기 POST  event : {targetDate, startReservedTime, endReservedTime, dayOfWeek, itemId, tutorId}
// 3-3. order : {item : 건식 마사지, price, startReservedAt, endReservedAt, eventId : 마사지ID}
// 3-4. 삭제하기 DELETE :id 로 삭제
export const generate_ORDERS = `${generate_URL}/orders`;

// 4. 선택한 날짜의 예약된 시간리스트 가져오기 {targetDate, startReservedTime, endReservedTime, dayOfWeek, itemId, tutorId}
export const generate_EVENTS = `${generate_URL}/events`;

// 5. 유저 조회 :id
export const generate_USERS = `${generate_URL}/users`;

// 6. kakao 로그인
export const generate_AUTH = `${generate_URL}/auth`;
