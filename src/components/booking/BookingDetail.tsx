import { TMassageDetail, TMassageTable } from "../../@types/massage";
import styled from "styled-components";
import { addMinutesUnit } from "../../util/time";
import { MEDIA_QUERY } from "../../const/devise";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageType } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import { addComma } from "../../util/price";
import { palette } from "../../styles/palette";
import { font } from "../../fonts/font";

type TProps = {
  detail: TMassageDetail;
  massage: TMassageTable;
};

const BookingDetail = ({ detail, massage }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const setAvailableTime = (time: number) => {
    dispatch(setSelectedMassageType(time));
    dispatch(addTabNum());
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <TopStyle>
          <h3>{massage.displayItem}</h3>
          <div>{addComma(detail.price)}</div>
        </TopStyle>
        <MiddleStyle>
          <p>{massage.content}</p>
        </MiddleStyle>
        <BottomStyle>
          <h3>{addMinutesUnit(detail.time)}</h3>
          <ButtonStyle onClick={() => setAvailableTime(detail.time)}>
            선택하기
          </ButtonStyle>
        </BottomStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDetail;

const ContainerStyle = styled.div`
  margin: 1rem auto;
  border-radius: 6px;
  border: 1px solid ${palette.grey};
  padding: 1rem;
  width: 45rem;
  height: 12rem;
  font-family: ${font.pretend};

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
    font-size: 1.3rem;
    font-family: ${font.Gmarket};
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
  /* width: 8.5rem;
  height: 2.5rem; */
  cursor: pointer;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-family: "Pretendard-Regular";
  border: 2px solid lightgrey;
  width: 100%;
  border-radius: 30px;

  /* border-radius: 30px; */
  padding: 0.8rem 1rem;
  width: 8rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
`;
