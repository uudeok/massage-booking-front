import { TTimeTable } from "../../@types/book";
import dayjs from "dayjs";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const divisionType = (type: number) => {
  let count = 0;
  if (type === 60) count = 13;
  if (type === 90) count = 19;
  if (type === 120) count = 25;

  return count;
};

export const divisionTime = (type: number, timeList: TTimeTable[]) => {
  let count = 0;
  if (type === 60) count = 13;
  if (type === 90) count = 19;
  if (type === 120) count = 25;

  const newArray = [];

  for (let i = 0; i <= timeList.length; i += count!) {
    newArray.push(timeList.slice(i, i + count!));
  }

  const remainderArray = newArray.filter((arr) => arr.length === count);

  return { remainderArray, count };
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

export const checkIdRange = (startId: number, endId: number) => {
  for (let i = startId; i <= endId; i++) {
    return i;
  }
};
