import styled from "styled-components";
import MyMileageList from "./MyMileageList";
import MyMileageTable from "./MyMileageTable";

const MyMileage = () => {
  // 개인 고객 조회

  return (
    <LayoutStyle>
      <HeaderStyle>‖ 적립금 내역</HeaderStyle>
      <MyMileageTable />
      <MyMileageList />
    </LayoutStyle>
  );
};

export default MyMileage;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;
