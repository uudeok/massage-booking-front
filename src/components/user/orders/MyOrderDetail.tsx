import styled from "styled-components";
import MyOrderSummary from "./MyOrderSummary";

const ORDER_STATUS_LIST = [
  { key: "PENDING", value: "요청중" },
  { key: "CONFIRM", value: "예약확정" },
  { key: "CANCEL", value: "취소" },
  { key: "COMPLETED", value: "완료" },
];

const MyOrderDetail = () => {
  return (
    <LayoutStyle>
      <HeaderStyle>‖ 예약 상세</HeaderStyle>
      <MyOrderSummary />
    </LayoutStyle>
  );
};

export default MyOrderDetail;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
  font-family: "Pretendard-Regular";
`;

const HeaderStyle = styled.h2`
  font-size: 1.5rem;
`;
