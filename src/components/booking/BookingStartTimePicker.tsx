import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { font } from "../../fonts/font";
import { ko } from "date-fns/esm/locale";
import { getDay, setHours, setMinutes } from "date-fns";
import dayjs from "dayjs";

const SUNDAY = 0;

type TProps = {
  selectedDate: Date;
  changeDateHandler: (date: Date) => void;
  booked: Date[];
};

const BookingStartTimePicker = ({
  selectedDate,
  changeDateHandler,
  booked,
}: TProps) => {
  const addTwoWeeks = dayjs().add(2, "weeks").format();
  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  const filterPassedTime = (() => {
    let isThrottled = false;
    let lastResult = false;
    console.log("12345");

    return (time: Date) => {
      if (!isThrottled) {
        console.log("678910");
        const currentTime = new Date().getTime();
        const selectedTime = time.getTime();

        lastResult = currentTime < selectedTime;
        console.log(lastResult);

        isThrottled = true;

        setTimeout(() => {
          isThrottled = false;
        }, 3000);
      }

      return lastResult;
    };
  })();

  // const filterPassedTime = (time: Date) => {
  //   const currentTime = new Date().getTime();
  //   const businessTime = time.getTime();

  //   return currentTime < businessTime;
  // };

  return (
    <StyledStartTimePicker
      dateFormat="yyyy-MM-dd aa h:mm "
      minDate={new Date()}
      maxDate={new Date(addTwoWeeks)}
      selected={selectedDate}
      onChange={changeDateHandler}
      locale={ko}
      filterDate={isOffDay}
      showTimeSelect
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 21)}
      timeCaption="시간"
      excludeTimes={booked}
      filterTime={filterPassedTime}
      onKeyDown={(e) => e.preventDefault()}
      dateFormatCalendar="yyyy년 MM월"
    />
  );
};

export default BookingStartTimePicker;

const StyledStartTimePicker = styled(DatePicker)`
  font-family: ${font.pretend};
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;
  cursor: pointer;

  &:focus {
    border: 2px solid blue;
  }
`;
