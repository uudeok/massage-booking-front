export interface IMassageDetail {
  time: number;
  price: number;
  id: number;
  massageId: number;
}

export interface IMassageTable {
  img: string;
  item: string;
  id: number;
  content: string;
  detail: IMassageDetail[];
}

export interface ITabHandler {
  changeTabHandler: (number: number) => void;
}

export interface IPreviousButton {
  changeTabHandler: (number: number) => void;
  tabNum: number;
}

export interface ITimeTable {
  startTime: string;
  endTime: string;
  type: string;
  date: Date;
  id: number;
}

/// Component props type ///

export interface IBookingItem {
  massage: IMassageTable;
  changeTabHandler: (number: number) => void;
  tabNum: number;
}

export interface IBookingDetail {
  detail: IMassageDetail;
  changeTabHandler: (number: number) => void;
  tabNum: number;
}

export interface IBookingAvailableTime {
  data: ITimeTable;
  changeTabHandler: (number: number) => void;
  tabNum: number;
}
