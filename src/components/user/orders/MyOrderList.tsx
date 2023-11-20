import styled from "styled-components";
import MyOrderItem from "./MyOrderItem";
import { useGetOrderListQuery } from "../../../api/orders/ordersQuery";
import MyOrderHeader from "./MyOrderHeader";
import Paging from "../../pagination/Paging";
import LoadingBar from "../../common/loading/LoadingBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MY_ORDER_LIST_PAGESIZE = 5;

const MyOrderList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data } = useGetOrderListQuery({
    pageSize: MY_ORDER_LIST_PAGESIZE,
    pageNumber: page,
  });

  if (!data) return <LoadingBar />;

  const orderList = data.orders;
  const meta = data.meta;

  const changePageHandler = (page: number) => {
    setPage(page);
    navigate(`/mypage/order/?page=${page}`);
  };

  return (
    <LayoutStyle>
      <HeaderStyle>‖ 예약 내역</HeaderStyle>
      <MyOrderHeader />

      <ContentLayoutStyle>
        {orderList &&
          orderList.map((order) => (
            <MyOrderItem key={order.id} order={order} />
          ))}
      </ContentLayoutStyle>
      <Paging
        count={meta.totalCount}
        changePageHandler={changePageHandler}
        page={page}
        pageSize={MY_ORDER_LIST_PAGESIZE}
      />
    </LayoutStyle>
  );
};

export default MyOrderList;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;

const ContentLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
