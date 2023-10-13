import { BOOKING_MASSAGE_TABLE } from "../../const/book";
import BookingItem from "./BookingItem";
import styled from "styled-components";
import { IPreviousButton } from "../../@types/book";
import { DEVISE_SIZE } from "../../const/devise";

const BookingItemList = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  // api 호출해서 마사지 리스트를 가져온다.

  return (
    <WrapperStyle>
      {BOOKING_MASSAGE_TABLE.map((massage) => (
        <BookingItemStyle key={massage.id}>
          <BookingItem
            massage={massage}
            changeTabHandler={changeTabHandler}
            tabNum={tabNum}
          />
        </BookingItemStyle>
      ))}
    </WrapperStyle>
  );
};

export default BookingItemList;

const WrapperStyle = styled.ul`
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
  margin: 45px;
  text-align: center;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 450px;
    margin: 15px;
    margin-top: 3rem;
  }
`;
