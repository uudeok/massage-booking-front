import styled from "styled-components";
import CommonButton from "../common/button/CommonButton";
import { getAuthUser } from "../../util/auth";
import { useNavigate } from "react-router-dom";
import { usePostOrderDataMutation } from "../../api/orders/ordersQuery";
import { TMassageTable } from "../../@types/massage";
import { makeSimpleDate, makeFullDate } from "../../util/date";
import { addFewMinutes } from "../../util/time";
import dayjs from "dayjs";
import { DAY_OF_WEEK_NUMBER } from "../../const/book/time";
import { useModal } from "../../hooks/useModal";
import LoginModal from "../common/UI/modal/LoginModal";
import ConditionalDisplay from "../common/maybe/ConditionalDisplay";

type TProps = {
  massageItem: TMassageTable;
  selectedDate: Date;
  massageTime: number;
  massagePrice: number;
  startTime: string;
  endTime: string;
};

const BookingConfirm = ({
  massageItem,
  selectedDate,
  massageTime,
  massagePrice,
  startTime,
  endTime,
}: TProps) => {
  const getAuth = getAuthUser();
  const navigate = useNavigate();
  const [postOrder] = usePostOrderDataMutation();

  const simpleDate = makeSimpleDate(selectedDate);
  const fullStartDate = makeFullDate(selectedDate);
  const fullEndDate = addFewMinutes(selectedDate, massageTime).format(
    "YYYY-MM-DDTHH:mm:ss"
  );
  const dayNum = dayjs(simpleDate).day();

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
          targetDate: simpleDate,
          startReservedTime: startTime,
          endReservedTime: endTime,
          dayOfWeek: DAY_OF_WEEK_NUMBER[dayNum],
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
