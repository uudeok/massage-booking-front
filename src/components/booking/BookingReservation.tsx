import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import BookingInfo from "./BookingInfo";
import BookingMemberTab from "./BookingMemberTab";

const BookingReservation = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  return (
    <ContainerStyle>
      <PreviousButton changeTabHandler={changeTabHandler} tabNum={tabNum - 1} />
      <InnerBoxStyle>
        <LeftBoxStyle>
          <BookingInfo />
        </LeftBoxStyle>
        <RightBoxStyle>
          <BookingMemberTab />
        </RightBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingReservation;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 30rem;
  margin: 0 auto;
`;

const InnerBoxStyle = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

const LeftBoxStyle = styled.div`
  height: 100%;
  width: 50%;
  padding: 1rem;
`;

const RightBoxStyle = styled.div`
  height: 100%;
  width: 50%;
  padding: 1rem;
`;
