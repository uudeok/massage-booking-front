import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { useState } from "react";
import { MEDIA_QUERY } from "../../const/devise";
import BookingCalendar from "./BookingCalendar";
import BookingAvailableTime from "./BookingAvailableTime";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { addTabNum } from "../../stores/tabSlice";
import { getMassageDetail } from "../../stores/massageSlice";
import { divisionTime, makeSimpleDate, validationDate } from "../../util/time";
import { useGetAvailableTimeListQuery } from "../../api/book/timeQuery";
import LoadingBar from "../common/loading/LoadingBar";
import { getSelectedTimeDetail } from "../../stores/timeSlice";
import ErrorPage from "../common/error/ErrorPage";
import AlertPage from "../common/error/AlertPage";

export type TSelectedItem = {
  startId: number;
  startTime: string;
  endId: number;
  endTime: string;
  date: string;
};

const BookingDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const dispatch = useDispatch<AppDispatch>();
  const detail = useSelector(getMassageDetail);
  const selectedType = detail[0].time;

  const simpleDate = makeSimpleDate(selectedDate);
  const isPassed = validationDate(selectedDate);

  const {
    data: timeList,
    isFetching,
    isError,
  } = useGetAvailableTimeListQuery(simpleDate);

  if (!timeList) {
    return <LoadingBar />;
  }

  const result = divisionTime(selectedType, timeList);
  const { count, remainderArray: timeTable } = result;

  const isPassedDate = isPassed && (
    <AlertPage>지난 날짜는 선택하실 수 없습니다😢</AlertPage>
  );
  const isOffDay = !isPassed && timeTable.length === 0 && (
    <AlertPage>선택 가능한 시간이 없습니다😢</AlertPage>
  );

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  const fetchReservation = async (selectedItem: TSelectedItem) => {
    await dispatch(getSelectedTimeDetail(selectedItem));

    dispatch(addTabNum());
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
        {isPassedDate}
        {isOffDay}
        {isError && <ErrorPage errorStatus={null} />}
        <TimeListBoxStyle>
          {!isPassed &&
            timeTable &&
            timeTable.map((item, index) => (
              <BookingAvailableTime
                key={index}
                data={item}
                fetchReservation={fetchReservation}
                count={count}
              />
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
