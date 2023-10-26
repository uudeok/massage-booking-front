import { useParams } from "react-router-dom";
import MyBookList from "./MyBookList";
import styled from "styled-components";

const MyPageTab = () => {
  const { category } = useParams();

  const MY_PAGE_TAB = [
    { key: "book", value: <MyBookList /> },
    { key: "mileage", value: "적립금" },
    { key: "coupon", value: "나의쿠폰" },
  ];

  const selectedMenu = MY_PAGE_TAB.filter((tab) => tab.key === category);

  return <ContentLayoutStyle>{selectedMenu[0].value}</ContentLayoutStyle>;
};
export default MyPageTab;

const ContentLayoutStyle = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  width: 100%;
`;
