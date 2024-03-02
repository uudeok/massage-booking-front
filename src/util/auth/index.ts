export const getUserInfo = () => {
  return localStorage.getItem("user");
};

export const getUserName = () => {
  return localStorage.getItem("nickname");
};

export const logout = () => {
  localStorage.removeItem("code");
};
