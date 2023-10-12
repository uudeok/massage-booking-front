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
