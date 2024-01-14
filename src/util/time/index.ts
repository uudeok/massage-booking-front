import dayjs from "dayjs";
import { TDropDownItem } from "../../components/common/dropdown";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const splitTimeArrays = (timeArrays: string[], timeInterval: number) => {
  let result = [] as string[];

  timeArrays.forEach((timeArray) => {
    let startTime = new Date(`1970-01-01T${timeArray[0]}:00`);
    const endTime = new Date(`1970-01-01T${timeArray[1]}:00`);

    while (startTime <= endTime) {
      const hours = startTime.getHours().toString().padStart(2, "0");
      const minutes = startTime.getMinutes().toString().padStart(2, "0");
      result.push(`${hours}:${minutes}`);

      startTime.setMinutes(startTime.getMinutes() + timeInterval);
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

export const addFewMinutes = (date: string, time: number) => {
  return dayjs(date).add(time, "minutes").format("HH:mm");
};

export const generateTimeArray = (interval: number) => {
  const hours = 24;
  const minutes = 60;
  const result = [];

  for (let hour = 0; hour < hours; hour++) {
    for (let minute = 0; minute < minutes; minute += interval) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const timeObject = {
        label: `${formattedHour}:${formattedMinute}`,
        value: `${formattedHour}:${formattedMinute}`,
        selectable: true,
      };
      result.push(timeObject);
    }
  }

  return result;
};

export const filterTimeRange = (
  timeList: string[],
  minTime: string,
  maxTime: string
) => {
  const startTime = timeList.indexOf(minTime);
  const endTime = timeList.indexOf(maxTime);

  if (startTime === -1 || endTime === -1 || startTime > endTime) {
    return [];
  }

  return timeList.slice(startTime, endTime + 1);
};

export const calculateMinTime = (
  timeList: TDropDownItem[],
  minTime: string
) => {
  let result = [];
  for (let i = 0; i < timeList.length; i++) {
    if (timeList[i].label >= minTime) {
      result.push(timeList[i]);
    }
  }
  return result;
};

export const calculateMaxTime = (
  timeList: TDropDownItem[],
  maxTime: string
) => {
  let result = [];
  for (let i = 0; i < timeList.length; i++) {
    if (timeList[i].label <= maxTime) {
      result.push(timeList[i]);
    }
  }
  return result;
};

export const disableSelectability = (
  timeList: TDropDownItem[],
  bookedData: string[]
) => {
  const result = timeList.map((time) => ({
    ...time,
    selectable: !bookedData.includes(time.value.toString()),
  }));

  return result;
};
