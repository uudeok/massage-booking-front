import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { useState } from "react";
import { MEDIA_QUERY } from "../../const/devise";
import BookingCalendar from "./BookingCalendar";
import BookingAvailableTime from "./BookingAvailableTime";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import { divisionTime } from "../../util/time";
import { useGetAvailableTimeListQuery } from "../../api/book/timeQuery";
import LoadingBar from "../common/loading/LoadingBar";
import ErrorPage from "../common/error/ErrorPage";
import AlertPage from "../common/error/AlertPage";
import { makeSimpleDate, validationDate } from "../../util/date";
import { setHours, setMinutes } from "date-fns";

const BookingDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const detail = useSelector(getMassageDetail);
  const selectedType = detail[0].time;

  const simpleDate = makeSimpleDate(selectedDate);
  const isPassed = validationDate(selectedDate);

  const {
    data: timeList,
    isFetching,
    error,
  } = useGetAvailableTimeListQuery(simpleDate, {
    refetchOnMountOrArgChange: true,
  });

  if (!timeList) {
    return <LoadingBar />;
  }

  if (error && "status" in error) {
    return <ErrorPage errorStatus={Number(error.status)} />;
  }

  const result = divisionTime(selectedType, timeList);
  const { count, remainderArray: timeTable } = result;

  const isOffDay = !isPassed && timeTable.length === 0 && (
    <AlertPage>선택 가능한 시간이 없습니다😢</AlertPage>
  );

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        <CalendarBoxStyle>
          <BookingCalendar
            changeDateHandler={changeDateHandler}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </CalendarBoxStyle>

        <AvailableBoxStyle>
          <AvailableCircleStyle></AvailableCircleStyle>
          <span> - 가능한 시간</span>
        </AvailableBoxStyle>
        {isFetching && <LoadingBar />}
        {isPassed && <AlertPage>지난 날짜는 선택하실 수 없습니다😢</AlertPage>}
        {isOffDay}
        <TimeListBoxStyle>
          {!isPassed &&
            timeTable &&
            timeTable.map((item, index) => (
              <BookingAvailableTime key={index} data={item} count={count} />
            ))}
        </TimeListBoxStyle>
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
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  width: 50rem;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const CalendarBoxStyle = styled.div`
  padding: 1.5rem;
  width: 50rem;
  margin: 2rem auto;
  display: flex;
  height: 6rem;
  align-items: center;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const TimeListBoxStyle = styled.div`
  margin-top: 1rem;
  width: 700px;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const AvailableBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0.5rem;
`;

const AvailableCircleStyle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #a2c294;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
