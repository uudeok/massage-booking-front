import { INotice } from "../@types/notice";

interface INoticeCategory {
  [key: string]: string;
}

export const NOTICE_CATEGORIES: INoticeCategory = {
  ALL: "전체",
  BUSINESS_TIME: "영업시간",
  EVENTS: "이벤트",
  ETC: "기타",
  RULES: "운영방침",
};

export const NOTICE_LIST: INotice[] = [
  {
    title: "영업시간 변경안내",
    date: "2023-10-04",
    category: "BUSINESS_TIME",
    content: "영업시간을 아래와 같이 변경 되었음을 안내드립니다. ",
    id: 1,
  },
  {
    title: "추석 이벤트 20% 할인 이벤트",
    date: "2023-10-01",
    category: "EVENTS",
    content: "추석연휴 동안 쌓인 피로 풀고가세요",
    id: 2,
  },
  {
    title: "기타 안내",
    date: "2023-08-18",
    category: "ETC",
    content: "기타사항 ",
    id: 3,
  },
  {
    title: "긴급공지 9/21일 휴무안내",
    date: "2023-09-20",
    category: "BUSINESS_TIME",
    content: "기타사항",
    id: 4,
  },
  {
    title: "운영 방침",
    date: "2023-09-26",
    category: "RULES",
    content: "기타사항 ",
    id: 5,
  },
];
