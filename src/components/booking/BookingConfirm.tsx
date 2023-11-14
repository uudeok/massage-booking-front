import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import DefaultButton from "../common/button/DefaultButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../stores/modalSlice";

const BookingConfirm = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setIsError] = useState("");

  const changeCheckedHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const bookMassageHandler = () => {
    if (!isChecked) return setIsError("* 예약 내역을 확인 후 체크해주세요.");
    dispatch(openModal({ type: "NoticeModal" }));
  };

  return (
    <>
      <ConfirmBoxStyle>
        <CheckBoxStyle>
          <CheckStyle>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={changeCheckedHandler}
            />
            <p>위 내용을 모두 확인 하였습니다.</p>
          </CheckStyle>
          {error && <WarningStyle>{error}</WarningStyle>}
        </CheckBoxStyle>
        <ButtonBoxStyle>
          <DefaultButton
            onClick={bookMassageHandler}
            width="10rem"
            backgroundColor="#76916a"
            color="white"
          >
            예약하기
          </DefaultButton>
        </ButtonBoxStyle>
      </ConfirmBoxStyle>
    </>
  );
};

export default BookingConfirm;

const ConfirmBoxStyle = styled.div`
  text-align: right;
  padding: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    text-align: center;
  }
`;

const CheckBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckStyle = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const WarningStyle = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: red;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const ButtonBoxStyle = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
