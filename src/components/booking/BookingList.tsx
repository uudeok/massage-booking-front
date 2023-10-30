import BookingItem from "./BookingItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { BOOKING_MASSAGE_TABLE } from "../../const/massage";

const BookingList = () => {
  // 마사지 리스트 API 가져옴

  return (
    <ContainerStyle>
      {BOOKING_MASSAGE_TABLE.map((massage) => (
        <BookingItemStyle key={massage.id}>
          <BookingItem massage={massage} />
        </BookingItemStyle>
      ))}
    </ContainerStyle>
  );
};

export default BookingList;

const ContainerStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;
  font-family: "Pretendard-Regular";
`;

const BookingItemStyle = styled.li`
  width: 500px;
  height: 500px;
  padding: 1rem;
  margin: 40px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 10px;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 360px;
    height: 450px;
    margin: 10px;
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    width: 335px;
    height: 450px;
    margin: 15px;
    margin-top: 3rem;
  }
`;
