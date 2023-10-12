/// BookingItem 에서 호출한 api 의 응답을 받와서 뿌려줌.

import { ITabHandler } from "../../@types/book";
import styled from "styled-components";
import BookingCard from "../common/card/BookingCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMassageList, getMassageTimeList } from "../../stores/massageSlice";
import { BOOKING_ITEM } from "../../const/book";
import { addMinutesUnit, addComma } from "../../util";
import PreviousButton from "../common/button/PreviousButton";
import { DEVISE_SIZE } from "../../const/devise";

const BookingDetail = ({ changeTabHandler }: ITabHandler) => {
  const massageDetail = useSelector(getMassageList);
  const massageTime = useSelector(getMassageTimeList);
  const massageItem = massageDetail[0].item;
  const massageDescription = massageDetail[0].content;

  const fetchMassageSelectableTime = async (massageId: number, id: number) => {
    /// 어떤 마사지의 몇분을 선택했는지
    /// 해당 마사지에 대해 가능한 날짜와 시간을 가져오는 api 요청
    /// previous button 으로 전 단계로 돌아갈경우, 다시 클릭하면 에러발생.

    changeTabHandler(2);
  };

  return (
    <BookingDetailContainerStyle>
      <ButtonBoxStyle>
        <PreviousButton changeTabHandler={changeTabHandler} tabNum={0}>
          이전 단계로
        </PreviousButton>
      </ButtonBoxStyle>
      {massageTime &&
        massageTime.map((massage) => (
          <BookingCard key={massage.id}>
            <BookingDetailHeaderStyle>
              <h3>{BOOKING_ITEM[massageItem]}</h3>
              <BookingDetailPriceStyle>
                {addComma(massage.price)}
              </BookingDetailPriceStyle>
            </BookingDetailHeaderStyle>

            <BookingDetailMainStyle>
              <p>{massageDescription}</p>
              <h4>{addMinutesUnit(massage.time)}</h4>
              <BookingDetailActionStyle>
                <button
                  onClick={() =>
                    fetchMassageSelectableTime(massage.id, massage.massageId)
                  }
                >
                  선택하기
                </button>
              </BookingDetailActionStyle>
            </BookingDetailMainStyle>
          </BookingCard>
        ))}
    </BookingDetailContainerStyle>
  );
};

export default BookingDetail;

const BookingDetailContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const ButtonBoxStyle = styled.div`
  margin: 1rem auto;
  width: 45rem;
`;

const BookingDetailHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    display: flex;
    flex-direction: column;
  }
`;

const BookingDetailMainStyle = styled.div`
  margin-top: 1rem;

  h4 {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const BookingDetailPriceStyle = styled.div`
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  background-color: #706f6f;
  color: white;
  font-size: 1.5rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    padding: 0.5rem 1rem;
    margin-top: 0.7rem;
  }
`;

const BookingDetailActionStyle = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 8rem;
    height: 2.5rem;
    cursor: pointer;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
