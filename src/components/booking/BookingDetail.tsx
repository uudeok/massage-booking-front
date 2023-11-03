import { TMassageDetail } from "../../@types/book";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { BOOKING_ITEM } from "../../const/massage";
import { addComma, addMinutesUnit } from "../../util";
import { MEDIA_QUERY } from "../../const/devise";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { getMassageItem, fetchMassageDetail } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";

const BookingDetail = ({ detail }: { detail: TMassageDetail }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedMassage = useSelector(getMassageItem);
  const item = selectedMassage.item;
  const content = selectedMassage.content;

  const getAvailableTime = async (time: number) => {
    await dispatch(fetchMassageDetail(time));
    dispatch(addTabNum());
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <TopStyle>
          <h3>{BOOKING_ITEM[item]}</h3>
          <div>{addComma(detail.price)}</div>
        </TopStyle>
        <MiddleStyle>
          <p>{content}</p>
        </MiddleStyle>
        <BottomStyle>
          <h3>{addMinutesUnit(detail.time)}</h3>
          <ButtonStyle onClick={() => getAvailableTime(detail.time)}>
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
  /* background-color: whitesmoke; */
  /* box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2); */
  border: 1px solid lightgrey;
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
    background-color: #5b5b5b;
    color: white;
    font-size: 1.5rem;
    font-family: "GmarketSansMedium";
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
    font-family: "GmarketSansMedium";
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
  background-color: white;
  color: black;
  font-size: 1rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
`;
