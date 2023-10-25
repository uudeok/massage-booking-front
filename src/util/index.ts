// import dayjs from "dayjs";

export const addMinutesUnit = (minute: number) => {
  return minute + "분";
};

export const addComma = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

export const addWon = (price: string) => {
  return price + "원";
};

export const getAuthUser = () => {
  const storedEmail = localStorage.getItem("email");

  if (!storedEmail) {
    return null;
  }

  return { storedEmail };
};

export const logout = () => {
  localStorage.removeItem("email");
};
