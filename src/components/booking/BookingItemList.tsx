import { BOOKING_MASSAGE_TABLE } from "../../const/book";
import BookingItem from "./BookingItem";
import styled from "styled-components";
import { ITabHandler } from "../../@types/book";

const BookingItemList = ({ changeTabHandler }: ITabHandler) => {
  // api 호출해서 마사지 리스트를 가져온다

  return (
    <BookingItemListStyle>
      {BOOKING_MASSAGE_TABLE.map((masg) => (
        <BookingItemStyle key={masg.id}>
          <BookingItem
            key={masg.id}
            massage={masg}
            changeTabHandler={changeTabHandler}
          />
        </BookingItemStyle>
      ))}
    </BookingItemListStyle>
  );
};

export default BookingItemList;

const BookingItemListStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
`;

const BookingItemStyle = styled.li`
  width: 500px;
  height: 500px;
  padding: 1rem;
  margin: 45px;
  text-align: center;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;
