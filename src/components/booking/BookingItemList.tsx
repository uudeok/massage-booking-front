import { BOOKING_MASSAGE_TABLE, BOOKING_ITEM } from "../../const/booking";
import { useState } from "react";
import styled from "styled-components";

const BookingItemList = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <BookingListContainerStyle>
      <BookingListLeftBoxStyle>
        <BookingListStyle>
          {BOOKING_MASSAGE_TABLE.map((massage, index) => (
            <BookingListItemStyle
              key={massage.id}
              onClick={() => setTabNum(index)}
              $isActive={index === tabNum}
            >
              {BOOKING_ITEM[massage.item]}
            </BookingListItemStyle>
          ))}
        </BookingListStyle>
      </BookingListLeftBoxStyle>

      <BookingListRightBoxStyle>
        <span>{BOOKING_MASSAGE_TABLE[tabNum].content}</span>
      </BookingListRightBoxStyle>
    </BookingListContainerStyle>
  );
};

export default BookingItemList;

const BookingListContainerStyle = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px dotted green;
`;

const BookingListLeftBoxStyle = styled.div`
  width: 30%;
  overflow-y: auto;
  border-right: none;
`;

const BookingListRightBoxStyle = styled.div`
  width: 70%;
  padding: 1rem;
  background-color: #ecf2ea;
`;

const BookingListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const BookingListItemStyle = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  height: 100%;
  display: inherit;
  justify-content: center;
  align-items: center;

  color: ${({ $isActive }) => ($isActive ? "#195B35" : "black")};
  background-color: ${({ $isActive }) =>
    $isActive ? "#ecf2ea" : "whitesmoke"};

  &:hover {
    color: #195b35;
  }
`;

const BookingListTypeListStyle = styled.ul`
  padding: 1rem;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  /* border: 1px solid red; */
`;

const BookingListButtonStyle = styled.button`
  border: none;
  background-color: #ecf2ea;
  cursor: pointer;
  font-size: 15px;
`;
