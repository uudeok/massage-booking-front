export const getAuthUser = () => {
  const token = localStorage.getItem("code");

  if (!token) {
    return null;
  }

  return { token };
};

export const logout = () => {
  localStorage.removeItem("code");
  localStorage.removeItem("com.naver.nid.access_token");
};
