export interface IMassageDetail {
  time: number;
  price: number;
  id: number;
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
