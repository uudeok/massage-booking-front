import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { addComma } from "../../util/price";
import { useSelector } from "react-redux";
import {
  getMassageDetail,
  getSelectedMassageItem,
} from "../../stores/massageSlice";
import { getAuthUser } from "../../util/auth";
import { usePostOrderDataMutation } from "../../api/orders/ordersQuery";
import dayjs from "dayjs";
import { DAY_OF_WEEK_NUMBER } from "../../const/book/time";
import { useNavigate } from "react-router-dom";
import { makeSimpleTime, addFewMinutes } from "../../util/time";
import { makeSimpleDate } from "../../util/date";
import { makeFullDate } from "../../util/date";
import { useModal } from "../../hooks/useModal";
import LoginModal from "../common/UI/modal/LoginModal";
import { palette } from "../../styles/palette";
import CommonButton from "../common/button/CommonButton";

type TProps = {
  selectedDate: Date;
  massageEndTime: Date | null;
};

const BookingSummary = ({ massageEndTime, selectedDate }: TProps) => {
  const getAuth = getAuthUser();
  const navigate = useNavigate();
  const massageItem = useSelector(getSelectedMassageItem);
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;
  const selectedMassagePrice = massageDetail[0].price;

  const simpleDate = makeSimpleDate(selectedDate);
  const fullStartDate = makeFullDate(selectedDate);
  const startTime = makeSimpleTime(selectedDate);
  const endTime = makeSimpleTime(massageEndTime);
  const fullEndDate = addFewMinutes(selectedDate, selectedMassageTime).format(
    "YYYY-MM-DDTHH:mm:ss"
  );
  const dayNum = dayjs(simpleDate).day();

  const {
    isOpen: isLoginModalOpen,
    showModal: showLoginModal,
    closeModal: closeLoginModal,
  } = useModal();

  const [postOrder] = usePostOrderDataMutation({
    fixedCacheKey: "shared-update-post",
  });

  const changeBookHandler = async () => {
    try {
      postOrder({
        order: {
          item: massageItem.displayItem,
          price: selectedMassagePrice,
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
    console.log("확인");
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

  const showLoginForm = isLoginModalOpen && (
    <LoginModal closeModal={closeLoginModal} path="/order/mypage" />
  );

  return (
    <>
      {showLoginForm}
      <SummaryBoxStyle>
        <SummaryListStyle>
          <SummaryItemStyle>
            <KeyStyle>받으실 마사지</KeyStyle>
            <span>{massageItem.displayItem}</span>
          </SummaryItemStyle>
          <SummaryItemStyle>
            <KeyStyle>받으실 날짜</KeyStyle>
            <span>{simpleDate}</span>
          </SummaryItemStyle>
          <SummaryItemStyle>
            <KeyStyle>받으실 시간</KeyStyle>
            <span>
              {startTime} - {endTime} ({selectedMassageTime}분)
            </span>
          </SummaryItemStyle>
          <SummaryItemStyle>
            <KeyStyle>금액</KeyStyle>
            <span>{addComma(selectedMassagePrice)}</span>
          </SummaryItemStyle>
        </SummaryListStyle>
        <ButtonBoxStyle>
          <CommonButton
            type="round"
            border="2px solid grey"
            onClickButton={bookMassageHandler}
            padding="0.5rem"
            hoverColor={palette.grey}
          >
            예약하기
          </CommonButton>
        </ButtonBoxStyle>
      </SummaryBoxStyle>
    </>
  );
};

export default BookingSummary;

const SummaryBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 85%;
    margin: auto;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const SummaryListStyle = styled.div`
  flex: 1;
`;

const SummaryItemStyle = styled.div`
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const KeyStyle = styled.span`
  flex: 1;
  text-align: left;
`;

const ButtonBoxStyle = styled.div`
  margin-top: 1rem;
`;
