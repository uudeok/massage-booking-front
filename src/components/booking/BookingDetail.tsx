import { TMassageDetail, TMassageTable } from "../../@types/massage";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageType } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import { addComma } from "../../util/price";
import { palette } from "../../styles/palette";

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
    <ItemBoxStyle>
      <ImgBoxStyle>
        <img
          src={massage.image}
          alt={massage.displayItem}
          width="100%"
          height="100%"
        />
      </ImgBoxStyle>
      <ContentBoxStyle>
        <TopBoxStyle>
          <span>{massage.displayItem}</span>
          <span>({detail.time}분)</span>
        </TopBoxStyle>
        <MiddleBoxStyle>{addComma(detail.price)}</MiddleBoxStyle>
        <ButtonStyle onClick={() => setAvailableTime(detail.time)}>
          예약하기
        </ButtonStyle>
      </ContentBoxStyle>
    </ItemBoxStyle>
  );
};

export default BookingDetail;

const ItemBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImgBoxStyle = styled.div`
  height: 70%;

  img {
    border-radius: 10px;
  }
`;

const ContentBoxStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ButtonStyle = styled.button`
  background-color: ${palette.white};
  color: ${palette.black};
  border: 2px solid ${palette.grey};
  padding: 0.7rem;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: ${palette.grey};
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
  }
`;

const TopBoxStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1rem;
    padding: 0;
  }
`;

const MiddleBoxStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1rem;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
