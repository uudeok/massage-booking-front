import { IMassageTable } from "../../@types/book";
import styled from "styled-components";
import { BOOKING_ITEM } from "../../const/book";
import { useDispatch } from "react-redux";
import { getMassageDetail, getMassageTime } from "../../stores/massageSlice";
import { DEVISE_SIZE } from "../../const/devise";

interface IProps {
  massage: IMassageTable;
  changeTabHandler: (number: number) => void;
}

const BookingItem = ({ massage, changeTabHandler }: IProps) => {
  const dispatch = useDispatch();

  const fetchDetailTime = async (id: number) => {
    /// 마사지를 선택하면 해당 id 로 api 호출, 마사지 detail 시간 가져오기
    // 그러고나서 props 로 받은 함수 호출해서 tab 이동
    await dispatch(getMassageDetail(id));
    await dispatch(getMassageTime(id));
    changeTabHandler(1);
  };

  return (
    <BookingItemBoxStyle>
      <BookingItemImgBoxStyle>
        <img src={massage.img} alt={massage.item} width="100%" height="100%" />
      </BookingItemImgBoxStyle>
      <BookingItemContentBoxStyle>
        <h3>{BOOKING_ITEM[massage.item]}</h3>
        <span>{massage.content}</span>
        <button onClick={() => fetchDetailTime(massage.id)}>예약하기</button>
      </BookingItemContentBoxStyle>
    </BookingItemBoxStyle>
  );
};

export default BookingItem;

const BookingItemBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BookingItemImgBoxStyle = styled.div`
  height: 70%;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    height: 75%;
  }
`;

const BookingItemContentBoxStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  span {
    flex: 1;
    font-family: "KBO-Dia-Gothic_medium";
    padding: 0.5rem;
    font-size: 15px;
  }

  button {
    background-color: white;
    padding: 0.7rem;
    cursor: pointer;

    &:hover {
      background-color: #2cc185;
      color: white;
      border: none;
    }
  }
`;
