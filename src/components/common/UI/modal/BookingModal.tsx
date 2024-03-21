import { FcOk } from "react-icons/fc";
import { usePostOrderDataMutation } from "../../../../api/orders/ordersQuery";
import { TMassageTable } from "../../../../@types/massage";
import { WEEK_DAYS } from "../../../../const/book/time";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import LoadingBar from "../../loading/LoadingBar";
import theme from "../../../../styles/theme";
import Modal from "./Modal";

type TBookingModalType = {
  closeModal: () => void;
  massageItem: TMassageTable;
  selectedDate: string;
  massagePrice: number;
  startTime: string;
  endTime: string;
};

const BookingModal = ({
  closeModal,
  massageItem,
  selectedDate,
  massagePrice,
  startTime,
  endTime,
}: TBookingModalType) => {
  const [postOrder, { isLoading }] = usePostOrderDataMutation();
  const navigate = useNavigate();
  const fullStartDate = `${selectedDate}T${startTime}`;
  const fullEndDate = `${selectedDate}T${endTime}`;
  const selectedDay = new Date(selectedDate).getDay();

  const bookMassageHandler = async () => {
    try {
      await postOrder({
        order: {
          item: massageItem.displayItem,
          price: massagePrice,
          startReservedAt: fullStartDate,
          endReservedAt: fullEndDate,
        },
        event: {
          targetDate: selectedDate,
          startReservedTime: startTime,
          endReservedTime: endTime,
          dayOfWeek: WEEK_DAYS[selectedDay],
          itemId: massageItem.id,
          tutorId: -1,
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      navigate("/mypage/order");
    }
  };

  return (
    <Modal closeModal={closeModal} height="15rem">
      <Self>
        <ContentBoxStyle>
          <Icon />
          <TitleStyle>예약을 진행하시겠습니까?</TitleStyle>
        </ContentBoxStyle>

        <ButtonBoxStyle>
          <Button onClick={() => closeModal()} $backgroundColor="whitesmoke">
            취소하기
          </Button>
          <Button
            color="white"
            $backgroundColor="#4CAF50"
            $onHover={true}
            onClick={bookMassageHandler}
            disabled={isLoading}
            $isLoading={isLoading}
          >
            {isLoading ? <LoadingBar /> : "예약하기"}
          </Button>
        </ButtonBoxStyle>
      </Self>
    </Modal>
  );
};

export default BookingModal;

const Self = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: ${theme.fonts.pretend};
`;

const ContentBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2rem;
`;

const ButtonBoxStyle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button<{
  color?: string;
  $backgroundColor: string;
  $onHover?: boolean;
  $isLoading?: boolean;
}>`
  border: none;
  padding: 1rem;
  border-radius: 10px;
  width: 45%;
  font-family: ${theme.fonts.pretend};
  font-size: 1rem;
  cursor: pointer;
  color: ${({ color }) => (color ? color : "black")};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "transparent"};

  ${({ $onHover }) =>
    $onHover &&
    css`
      &:hover {
        background-color: ${theme.palette.naverColor};
      }
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      background-color: #ebebeb;
      pointer-events: none;
    `}
`;

const Icon = styled(FcOk)`
  font-size: 2.5rem;
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;
