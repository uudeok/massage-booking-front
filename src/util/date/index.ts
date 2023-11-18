import dayjs from "dayjs";

export const makeSliceDate = (date: string) => {
  const sliceDate = date.slice(0, 10);
  return sliceDate;
};

export const makeSimpleDate = (selectedDate: Date) => {
  const simpleDate = dayjs(selectedDate).format("YYYY-MM-DD");
  return simpleDate;
};

export const validationDate = (selectedDate: Date) => {
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const date = dayjs(selectedDate).format("YYYY-MM-DD");

  const isPassedDate = date < today;

  return isPassedDate;
};
