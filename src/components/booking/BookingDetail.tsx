import { IBookingDetail } from "../../@types/book";
import styled from "styled-components";
import BookingCard from "../common/card/BookingCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMassageList } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/book";
import { addComma, addMinutesUnit } from "../../util";
import { DEVISE_SIZE } from "../../const/devise";

const BookingDetail = ({
  detail,
  changeTabHandler,
  tabNum,
}: IBookingDetail) => {
  const massageDetail = useSelector(getMassageList);
  const item = massageDetail[0].item;
  const description = massageDetail[0].content;

  const fetchAvailableTime = async (massageId: number, id: number) => {
    // 어떤 마사지의 몇분을 선택했는지 id 로 api 호출
    // 예를들어 workingday/?from=오늘날짜&to=오늘날짜&products=선택한 마사지&category=마사지시간
    // 그리고 나서 tab 이동
    console.log(massageId, id);
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
            onClick={() => fetchAvailableTime(detail.massageId, detail.id)}
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
  padding: 1rem;
  width: 45rem;
  height: 12rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    height: 20rem;
    width: 21rem;
    margin: 2rem auto;
    padding: 0.5rem;
  }
`;

const InnerBoxStyle = styled.div`
  width: 100%;
  padding: 1rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
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
    padding: 0.5rem 1.5rem;
    background-color: #404e38;
    color: white;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    display: flex;
    flex-direction: column;

    div {
      font-size: 1.3rem;
      margin-top: 0.5rem;
    }
  }
`;

const MiddleStyle = styled.div`
  padding: 0.5rem 0;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
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

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
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
  /* background-color: #9ac488; */
  /* border: none; */
  color: black;
  font-size: 1rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
    margin-top: 1rem;
  }
`;
