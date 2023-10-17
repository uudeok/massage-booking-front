import { useSelector } from "react-redux";
import { getMassageList } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/book";
import styled from "styled-components";

const BookingInfo = () => {
  const bookingData = useSelector(getMassageList);
  return (
    <>
      <BookingInfoHeaderStyle>
        {BOOKING_ITEM[bookingData[0].item]}
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
      <hr style={{ marginTop: "2rem" }}></hr>
      <BookingAgreementBoxStyle>
        <input type="checkbox" required />
        <p>예약한 내용을 확인 하였습니다.</p>
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
