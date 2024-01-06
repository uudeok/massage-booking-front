import dayjs from "dayjs";
import { splitTimeArraysBy30Minutes } from "../time";

export const makeFullDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
};

export const makeSimpleDate = (date: Date | string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const validationDate = (selectedDate: Date) => {
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const date = dayjs(selectedDate).format("YYYY-MM-DD");

  const isPassedDate = date < today;

  return isPassedDate;
};

export const convertStringsToDates = (timeStrings: string[]) => {
  const dateObjects = timeStrings.map((timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  });

  return dateObjects;
};

export const calculateBookedData = (bookedData: string[]) => {
  const dividedMinutes = splitTimeArraysBy30Minutes(bookedData);
  return convertStringsToDates(dividedMinutes);
};

export const spreadBookedData = (bookedData: string[]) => {
  let data = [];

  for (let i = 0; i < bookedData.length; i++) {
    for (let j = 0; j <= 1; j++) {
      data.push(bookedData[i][j]);
    }
  }
  return data;
};
