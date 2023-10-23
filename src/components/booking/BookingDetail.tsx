import { IBookingDetail } from "../../@types/book";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMassage } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/massage";
import { addComma, addMinutesUnit } from "../../util";
import { MEDIA_QUERY } from "../../const/devise";
import { getAvailableDate } from "../../stores/bookSlice";
import { useDispatch } from "react-redux";

const BookingDetail = ({
  detail,
  changeTabHandler,
  tabNum,
}: IBookingDetail) => {
  const dispatch = useDispatch();
  const massageDetail = useSelector(getMassage);
  const item = massageDetail[0].item;
  const description = massageDetail[0].content;

  const fetchAvailableTime = async (massageId: number, massageTime: number) => {
    // 어떤 마사지의 몇분을 선택했는지 id 로 api 호출
    // 예를들어 workingday/?from=오늘날짜&to=오늘날짜&products=선택한 마사지(massageId)&category=마사지시간(detail.time) 아니면 detailId
    // 그리고 나서 tab 이동
    dispatch(getAvailableDate(new Date()));
    changeTabHandler(tabNum + 1);
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <TopStyle>
          <h3>{BOOKING_ITEM[item]}</h3>
          <div>{addComma(detail.price)}</div>
        </TopStyle>
        <MiddleStyle>
          <p>{description}</p>
        </MiddleStyle>
        <BottomStyle>
          <h3>{addMinutesUnit(detail.time)}</h3>
          <ButtonStyle
            onClick={() => fetchAvailableTime(detail.massageId, detail.time)}
          >
            선택하기
          </ButtonStyle>
        </BottomStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDetail;

const ContainerStyle = styled.div`
  margin: 2rem auto;
  border-radius: 6px;
  background-color: whitesmoke;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  width: 45rem;
  height: 12rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    height: 18rem;
    width: 21rem;
    margin: 2rem auto;
    padding: 0.5rem;
  }
`;

const InnerBoxStyle = styled.div`
  width: 100%;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    height: 100%;
  }
`;

const TopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  div {
    border-radius: 30px;
    padding: 0.8rem 1rem;
    background-color: #666161;
    color: white;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    /* display: flex;
    flex-direction: column; */

    div {
      font-size: 1.3rem;
      margin-top: 0.5rem;
    }
  }
`;

const MiddleStyle = styled.div`
  padding: 0.5rem 0;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const BottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  h3 {
    padding: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.3rem;
    }
  }
`;

const ButtonStyle = styled.button`
  width: 8.5rem;
  height: 2.5rem;
  cursor: pointer;
  /* background-color: #819977; */
  /* border: none; */
  color: black;
  font-size: 1rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
`;
