import { BOOKING_MASSAGE_TABLE } from "../../const/massage";
import BookingItem from "./BookingItem";
import styled from "styled-components";
import { IPreviousButton } from "../../@types/book";
import { MEDIA_QUERY } from "../../const/devise";

const BookingItemList = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  /// 마사지 리스트를 가져오는 API 요청

  return (
    <ContainerStyle>
      {BOOKING_MASSAGE_TABLE.map((massage) => (
        <BookingItemStyle key={massage.id}>
          <BookingItem
            massage={massage}
            changeTabHandler={changeTabHandler}
            tabNum={tabNum}
          />
        </BookingItemStyle>
      ))}
    </ContainerStyle>
  );
};

export default BookingItemList;

const ContainerStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;
  font-family: "GmarketSansMedium";
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
