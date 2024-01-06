import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { font } from "../../fonts/font";
import { ko } from "date-fns/esm/locale";

type TProps = {
  endTime: Date | null;
  setEndTime: React.Dispatch<React.SetStateAction<Date | null>>;
};

const BookingEndTimePicker = ({ endTime, setEndTime }: TProps) => {
  return (
    <StyledEndTimePicker
      showTimeSelect
      locale={ko}
      selected={endTime}
      onChange={(time) => setEndTime(time)}
      placeholderText="종료 시간"
      dateFormat="yyyy-MM-dd aa h:mm "
      disabled
    />
  );
};

export default BookingEndTimePicker;

const StyledEndTimePicker = styled(DatePicker)`
  font-family: ${font.pretend};
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;
  cursor: pointer;
`;
