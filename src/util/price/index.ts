export const addComma = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

export const addWon = (price: string) => {
  return price + "원";
};
