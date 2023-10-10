export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const addComma = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const addWon = (price: string) => {
  return price + "원";
};
