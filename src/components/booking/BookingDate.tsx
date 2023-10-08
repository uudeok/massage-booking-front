import Calendar from "../common/calendar/Calendar";

const BookingDate = () => {
  const changeDateHandler = () => {};

  return (
    <div>
      <Calendar
        changeDateHandler={changeDateHandler}
        selectedDate={new Date()}
      />
    </div>
  );
};

export default BookingDate;
