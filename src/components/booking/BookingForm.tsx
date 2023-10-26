import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import { useState } from "react";
import Modal from "../common/UI/Modal";
import LoginForm from "../auth/Login";
import BookingSummary from "./BookingSummary";
import BookingConfirm from "./BookingConfirm";
import { getAuthUser } from "../../util";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const userInfo = getAuthUser();
  const navigate = useNavigate();
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const fetchMemberReservation = () => {
    const process = window.confirm("예약 하시겠습니까?");
    if (process) {
      /// 예약 API 요청
      navigate("/mypage/book");
    }
  };

  const changeCheckedHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const showLoginHandler = () => {
    if (!isChecked) {
      setError("* 예약 내역을 확인 후 체크해주세요.");
      return;
    }

    if (userInfo !== null) {
      fetchMemberReservation();
      return;
    }
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
        showLoginHandler={showLoginHandler}
        error={error}
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
