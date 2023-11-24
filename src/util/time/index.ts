import dayjs from "dayjs";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const splitTimeArraysBy30Minutes = (timeArrays: string[]) => {
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

export const isTimeOverlaps = (
  spreadData: string[],
  start: string,
  end: string
) => {
  const result = spreadData.filter((data) => start < data && data < end);
  return result;
};

export const makeSimpleTime = (date: Date | string | null) => {
  return dayjs(date).format("HH:mm");
};

export const addFewMinutes = (date: Date, time: number) => {
  return dayjs(date).add(time, "minutes");
};
