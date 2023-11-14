import { TTimeTable } from "../../@types/book";
import dayjs from "dayjs";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
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

/// 지금은 60은 9~10시, 10~11시 이렇게 나눠져 있는데
// 만약 누군가 9~10시가 예약되어 있다면, 90분은 10~11시30분 이런식으로 되어야 함

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
