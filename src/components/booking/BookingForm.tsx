import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import BookingSummary from "./BookingSummary";
import BookingConfirm from "./BookingConfirm";
import { getAuthUser } from "../../util/auth";
import { useNavigate } from "react-router-dom";
import DefaultModal from "../common/UI/DefaultModal";
import { useModal } from "../../hooks/useModal";

const BookingForm = () => {
  const storedEmail = getAuthUser();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const { modalIsShown, setModalIsShown, hideModalHandler } = useModal();

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

  const validCheckHandler = () => {
    if (!isChecked) {
      setError("* 예약 내역을 확인 후 체크해주세요.");
      return false;
    }
    return true;
  };

  const bookMassageHandler = () => {
    if (!validCheckHandler()) return;

    if (storedEmail !== null) {
      fetchMemberReservation();
      return;
    }
    setModalIsShown(true);
  };

  return (
    <ContainerStyle>
      {modalIsShown && isChecked && (
        <DefaultModal onClose={hideModalHandler}>
          <LoginForm path="mypage/book" onClose={hideModalHandler} />
        </DefaultModal>
      )}
      <PreviousButton />
      <BookingSummary />
      <BookingConfirm
        isChecked={isChecked}
        changeCheckedHandler={changeCheckedHandler}
        bookMassageHandler={bookMassageHandler}
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
