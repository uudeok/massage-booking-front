import dayjs from "dayjs";

export const makeFullDate = (date: Date | string) => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
};

export const makeSimpleDate = (date: Date | string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const makeSimpleMonth = (month: number) => {
  return month + 1;
};

export const getMonthLabel = (
  year: number,
  month: number,
  option: "short" | "long"
): string => {
  return new Date(year, month).toLocaleString("kr", { month: option });
};

export const getMonthInfo = (year: number, month: number) => {
  const firstDay = new Date(year, month).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  return { firstDay, lastDay };
};

export const validationDate = (selectedDate: Date | string) => {
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

export const spreadBookedData = (bookedData: string[]) => {
  let data = [];

  for (let i = 0; i < bookedData.length; i++) {
    for (let j = 0; j <= 1; j++) {
      data.push(bookedData[i][j]);
    }
  }
  return data;
};

export const getDateLabel = (fullDate: string): string => {
  const dateObj = new Date(fullDate);

  const year = dateObj.getFullYear();

  const month = dateObj.getMonth() + 1;
  const monthLabel = String(month).padStart(2, "0");

  const date = dateObj.getDate().toString();
  const dateLabel = date.padStart(2, "0");

  return `${year}-${monthLabel}-${dateLabel}`;
};
