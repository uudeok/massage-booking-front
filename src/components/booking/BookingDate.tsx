import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { useState } from "react";
import { MEDIA_QUERY } from "../../const/devise";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import dayjs from "dayjs";
import BookingCalendar from "./BookingCalendar";
import LoadingBar from "../common/loading/LoadingBar";
import { setHours, setMinutes } from "date-fns";

const BookingDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const targetDate = dayjs(selectedDate).format("YYYY-MM-DD");
  const { data: bookedData } = useGetBookedTimeListQuery(targetDate);

  if (!bookedData) return <LoadingBar />;

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        <ContentBoxStyle>
          <BookingCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            bookedData={bookedData}
          />
        </ContentBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem auto;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  width: 60rem;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  /* box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2); */
  margin-top: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
    text-align: center;
  }
`;
