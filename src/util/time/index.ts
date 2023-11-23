import dayjs from "dayjs";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const splitMultipleTimeArraysBy30Minutes = (timeArrays: string[]) => {
  let result = [] as string[];

  timeArrays.forEach((timeArray) => {
    let startTime = new Date(`1970-01-01T${timeArray[0]}:00`);
    const endTime = new Date(`1970-01-01T${timeArray[1]}:00`);

    while (startTime <= endTime) {
      const hours = startTime.getHours().toString().padStart(2, "0");
      const minutes = startTime.getMinutes().toString().padStart(2, "0");
      result.push(`${hours}:${minutes}`);

      startTime.setMinutes(startTime.getMinutes() + 30);
    }
  });

  return result;
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

export const makeFullDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
};

export const makeSimpleDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const makeSimpleTime = (date: Date | null) => {
  return dayjs(date).format("HH:mm");
};

export const addMinutes = (date: string, time: number) => {
  return dayjs(date).add(time, "minutes");
};
