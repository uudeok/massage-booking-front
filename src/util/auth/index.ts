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
