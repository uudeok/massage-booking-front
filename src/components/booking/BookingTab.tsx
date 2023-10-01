import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingCard from "../common/card/BookingCard";

const TAB_LIST = [
  { key: "마사지예약", content: <BookingForm /> },
  { key: "마사지조회", content: "내용2" },
  { key: "마사지수정", content: "내용3" },
];

const BookingTab = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <>
      <ul>
        {TAB_LIST.map((item, index) => (
          <li key={item.key} onClick={() => setTabNum(index)}>
            {item.key}
          </li>
        ))}
      </ul>
      <BookingCard>{TAB_LIST[tabNum].content}</BookingCard>
    </>
  );
};

export default BookingTab;
