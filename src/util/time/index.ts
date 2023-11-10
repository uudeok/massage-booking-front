import { TTimeTable } from "../../@types/massage";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const divisionTime = (type: number, timeList: TTimeTable[]) => {
  let count = 0;
  if (type === 60) count = 13;
  if (type === 90) count = 25;
  if (type === 120) count = 37;

  const newArray = [];

  for (let i = 0; i <= timeList.length; i += count!) {
    newArray.push(timeList.slice(i, i + count!));
  }

  const remainderArray = newArray.filter((arr) => arr.length === count);

  return { remainderArray, count };
};
