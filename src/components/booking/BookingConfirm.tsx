import styled from "styled-components";
import CommonButton from "../common/button/CommonButton";
import { getAuthUser } from "../../util/auth";
import { useNavigate } from "react-router-dom";
import { usePostOrderDataMutation } from "../../api/orders/ordersQuery";
import { TMassageTable } from "../../@types/massage";
import { WEEK_DAYS } from "../../const/book/time";
import { useModal } from "../../hooks/useModal";
import LoginModal from "../common/UI/modal/LoginModal";
import ConditionalDisplay from "../common/maybe/ConditionalDisplay";

type TProps = {
  massageItem: TMassageTable;
  selectedDate: string;
  massagePrice: number;
  startTime: string;
  endTime: string;
};

const BookingConfirm = ({
  massageItem,
  selectedDate,
  massagePrice,
  startTime,
  endTime,
}: TProps) => {
  const getAuth = getAuthUser();
  const navigate = useNavigate();
  const [postOrder] = usePostOrderDataMutation();

  const fullStartDate = `${selectedDate}T${startTime}`;
  const fullEndDate = `${selectedDate}T${endTime}`;
  const selectedDay = new Date(selectedDate).getDay();

  const changeBookHandler = async () => {
    try {
      postOrder({
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
    }
  };

  const bookMassageHandler = () => {
    if (getAuth) {
      const process = window.confirm("예약을 진행하시겠습니까?");
      if (process) {
        changeBookHandler();
        navigate("/mypage/order");
      }
    } else {
      showLoginModal();
    }
  };

  const {
    isOpen: isLoginModalOpen,
    showModal: showLoginModal,
    closeModal: closeLoginModal,
  } = useModal();

  return (
    <ButtonBoxStyle>
      <ConditionalDisplay isShow={isLoginModalOpen}>
        <LoginModal closeModal={closeLoginModal} path="/order/mypage" />
      </ConditionalDisplay>
      <CommonButton
        type="round"
        $border="2px solid grey"
        onClickButton={bookMassageHandler}
        $padding="0.5rem"
        disabled={!startTime}
      >
        예약하기
      </CommonButton>
    </ButtonBoxStyle>
  );
};

export default BookingConfirm;

const ButtonBoxStyle = styled.div`
  margin-top: 1rem;
`;
