export const getSchedule = () => {
  const column = 31;
  const row = 24 * 12;

  const scheduleArr = [];

  for (let i = 1; i <= column; i++) {
    const day = i;
    const arr = [];

    for (let j = 0; j < row; j++) {
      const fiveMinuteUnit = j * 5;
      const minutes = fiveMinuteUnit % 60;
      const hour = Math.floor(fiveMinuteUnit / 60);
      const time = `${hour < 10 ? "0" : ""}${hour}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
      arr.push(`${day} ${time}`);
    }

    scheduleArr.push(arr);
  }

  return scheduleArr;
};
