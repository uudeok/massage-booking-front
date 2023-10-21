import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import { useSelector } from "react-redux";
import { getMassageList } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/massage";
import { MEDIA_QUERY } from "../../const/devise";
import { useState } from "react";
import Modal from "../common/UI/Modal";
import LoginForm from "../auth/Login";

const BookingReservation = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const bookingData = useSelector(getMassageList);
  const item = bookingData[0].item;
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <ContainerStyle>
      {loginIsShown && (
        <Modal onClose={hideLoginHandler}>
          <LoginForm />
        </Modal>
      )}
      <PreviousButton changeTabHandler={changeTabHandler} tabNum={tabNum - 1} />
      <HeaderStyle>예약 주문서 확인</HeaderStyle>
      <SummaryBoxStyle>
        <TimeBoxStyle>
          <span>마사지 시간</span>
          <span>09:00 - 10:00 (60분)</span>
        </TimeBoxStyle>
        <ItemBoxStyle>
          <span>마사지 종류</span>
          <span>{BOOKING_ITEM[item]}</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>받으실 날짜</span>
          <span>2023-10-20</span>
        </ItemBoxStyle>
        <LastItemBoxStyle>
          <span>금액</span>
          <span>60,000원</span>
        </LastItemBoxStyle>
      </SummaryBoxStyle>
      <ConfirmBoxStyle>
        <CheckBoxStyle>
          <input type="checkbox" required />
          <p>위 내용을 모두 확인 하였습니다.</p>
        </CheckBoxStyle>
        <ButtonBoxStyle>
          <NonMemberButtonStyle>비회원으로 진행</NonMemberButtonStyle>
          <MemberButtonStyle onClick={showLoginHandler}>
            회원으로 진행
          </MemberButtonStyle>
        </ButtonBoxStyle>
      </ConfirmBoxStyle>
    </ContainerStyle>
  );
};

export default BookingReservation;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
`;

const HeaderStyle = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 1.5rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

const SummaryBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  /* border: 2px solid #76916a; */

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const TimeBoxStyle = styled.div`
  width: 30%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgrey;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const ItemBoxStyle = styled.div`
  width: 24%;
  border-right: 1px solid lightgrey;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const LastItemBoxStyle = styled.div`
  width: 20%;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const ConfirmBoxStyle = styled.div`
  text-align: right;
  padding: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    text-align: center;
  }
`;

const CheckBoxStyle = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const ButtonBoxStyle = styled.div`
  margin-bottom: 1.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: flex;
    flex-direction: row;
  }
`;

const NonMemberButtonStyle = styled.button`
  background-color: whitesmoke;
  width: 13rem;
  height: 3.5rem;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    border: 2px solid #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    font-size: 0.95rem;

    &:hover {
      border: 1px solid #76916a;
    }
  }
`;

const MemberButtonStyle = styled.button`
  background-color: #76916a;
  width: 13rem;
  height: 3.5rem;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    font-size: 0.9rem;

    &:hover {
      border: 1px solid white;
    }
  }
`;
