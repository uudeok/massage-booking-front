import styled from "styled-components";
import DefaultButton from "../common/button/DefaultButton";
import { MEDIA_QUERY } from "../../const/devise";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../stores/modalSlice";
import { getAuthUser } from "../../util/auth";
import { useNavigate } from "react-router-dom";

const BOOKING_NOTICE = [
  { content: "결제는 현장에서 진행 됩니다.", id: 1 },
  {
    content: "예약 시간 10분 전에는 방문을 부탁드립니다.",
    id: 2,
  },
  {
    content:
      "예약이 들어온 순서대로 진행 되고 있어 예약이 취소 될 수 있습니다.",
    id: 3,
  },
  {
    content: "예약 내역 및 취소는 마이페이지에서 확인하실 수 있습니다.",
    id: 4,
  },
  {
    content: "연락 없이 10분 동안 방문 하지 않으면 예약은 자동 취소됩니다.",
    id: 5,
  },
  {
    content:
      "연락 없이 방문 하지 않을 경우 추후 예약 시 페널티가 부과 될 수 있습니다. 신중한 예약 부탁드립니다.",
    id: 6,
  },
];

const BookingNotice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAuth = getAuthUser();

  const showMyPageHandler = () => {
    dispatch(
      openModal({
        type: "OneBtnModal",
        props: {
          icon: "💗",
          content: "예약이 완료 되었습니다.",
          confirm: "마이페이지에서 확인 가능합니다.",
        },
      })
    );
    navigate("/mypage/book");
  };

  const showLoginFormHandler = () => {
    dispatch(closeModal());

    if (getAuth) {
      showMyPageHandler();
      return;
    }

    dispatch(openModal({ type: "LoginModal", props: { path: "mypage/book" } }));
  };

  return (
    <ContainerStyle>
      <NoticeFormStyle>
        <h2>※ 예약 안내</h2>
        {BOOKING_NOTICE.map((item) => (
          <NoticeItemStyle key={item.id}>
            <span>•</span>
            <NoticeContentStyle>{item.content} </NoticeContentStyle>
          </NoticeItemStyle>
        ))}
      </NoticeFormStyle>
      <ButtonBoxStyle>
        <DefaultButton width="12rem" onClick={() => dispatch(closeModal())}>
          취소
        </DefaultButton>
        <DefaultButton
          width="12rem"
          backgroundColor="#afc9a4"
          color="white"
          onClick={showLoginFormHandler}
        >
          확인
        </DefaultButton>
      </ButtonBoxStyle>
    </ContainerStyle>
  );
};

export default BookingNotice;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NoticeFormStyle = styled.ul`
  padding: 1rem;
  font-family: "Pretendard-Regular";
  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
`;

const NoticeItemStyle = styled.div`
  display: flex;
  align-items: center;
`;

const NoticeContentStyle = styled.li`
  line-height: 1.2rem;
  padding: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;

const ButtonBoxStyle = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;
