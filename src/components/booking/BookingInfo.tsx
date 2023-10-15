import { useSelector } from "react-redux";
import { getMassageList } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/book";
import styled from "styled-components";

const BookingInfo = () => {
  const bookingData = useSelector(getMassageList);
  return (
    <>
      <BookingInfoHeaderStyle>
        선택하신 마사지는 {BOOKING_ITEM[bookingData[0].item]} 입니다.
      </BookingInfoHeaderStyle>
      <BookingInfoStyle>
        <span>날짜</span>
        <span>2023-10-15</span>
      </BookingInfoStyle>
      <BookingInfoStyle>
        <span>시간</span>
        <span>09:00-10:00 (1시간)</span>
      </BookingInfoStyle>
      <BookingInfoStyle>
        <span>금액</span>
        <span>60,000원</span>
      </BookingInfoStyle>
      <hr></hr>
      <BookingAgreementBoxStyle>
        <input type="checkbox" required />
        <p>선택한 내용과 금액이 모두 일치합니다.</p>
      </BookingAgreementBoxStyle>
    </>
  );
};

export default BookingInfo;

const BookingInfoHeaderStyle = styled.div`
  font-size: 25px;
  margin-bottom: 3rem;
`;

const BookingInfoStyle = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 20px;

  span:first-child {
    flex: 1;
  }
`;

const BookingAgreementBoxStyle = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
