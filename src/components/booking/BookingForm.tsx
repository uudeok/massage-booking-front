import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import { useState } from "react";
import Modal from "../common/UI/Modal";
import LoginForm from "../auth/Login";
import BookingSummary from "./BookingSummary";
import BookingConfirm from "./BookingConfirm";

const BookingForm = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const changeCheckedHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <ContainerStyle>
      {loginIsShown && isChecked && (
        <Modal onClose={hideLoginHandler}>
          <LoginForm />
        </Modal>
      )}
      <PreviousButton changeTabHandler={changeTabHandler} tabNum={tabNum - 1} />
      <BookingSummary />
      <BookingConfirm
        isChecked={isChecked}
        changeCheckedHandler={changeCheckedHandler}
        loginIsShown={loginIsShown}
        showLoginHandler={showLoginHandler}
      />
    </ContainerStyle>
  );
};

export default BookingForm;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto;
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
`;
