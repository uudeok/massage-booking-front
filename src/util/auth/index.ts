export const getAuthUser = () => {
  const token = localStorage.getItem("access_token");

  console.log("index", token);
  if (!token) {
    return null;
  }

  return { token };
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("com.naver.nid.access_token");
};
