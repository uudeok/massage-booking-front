import { useState } from "react";

export const useModal = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return { modalIsShown, setModalIsShown, hideModalHandler };
};
