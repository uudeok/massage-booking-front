import { BOOKING_MASSAGE_TABLE } from "../../const/booking";
import styled from "styled-components";
import { useState } from "react";

const BookingList = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <>
      <BookingListContainerStyle>
        <BookingListItemStyle>
          <ul>
            {BOOKING_MASSAGE_TABLE.map((item, index) => (
              <li key={item.item} onClick={() => setTabNum(index)}>
                {item.item}
              </li>
            ))}
          </ul>
        </BookingListItemStyle>
        <BookingListContentStyle>
          <img
            src={`${BOOKING_MASSAGE_TABLE[tabNum].img}`}
            alt={`${BOOKING_MASSAGE_TABLE[tabNum].item}`}
          />
          {BOOKING_MASSAGE_TABLE[tabNum].content}
        </BookingListContentStyle>
      </BookingListContainerStyle>
    </>
  );
};

export default BookingList;

const BookingListContainerStyle = styled.header`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  width: 100%;
  overflow: scroll;
`;

const BookingListInnerStyle = styled.div`
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
`;

const BookingListItemStyle = styled.div`
  border: 1px solid black;
`;

const BookingListContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
`;
