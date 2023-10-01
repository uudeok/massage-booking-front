import BookingCard from "../common/card/BookingCard";
import BookingForm from "./BookingForm";

const BookingList = () => {
  return (
    <BookingCard>
      <BookingForm />
      {/* 예약조회 form 자리 / 버튼에 따라 예약 or 조회로 바뀌게끔 */}
    </BookingCard>
  );
};

export default BookingList;
