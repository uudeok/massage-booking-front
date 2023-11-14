import { useDispatch } from "react-redux";
import Card from "../../common/card/Card";
import styled from "styled-components";
import { openModal } from "../../../stores/modalSlice";

const MemberWithdrawal = () => {
  const dispatch = useDispatch();

  const withdrawalHandler = () => {
    //  user 의 아직 완료 되지 않은 예약 내역이 있다면 탈퇴 불가하도록

    dispatch(
      openModal({
        type: "TwoBtnModal",
        props: {
          content: "예약 내역 및 적립금이 모두 소멸됩니다.",
          confirm: "정말 탈퇴하시겠습니까?",
        },
      })
    );
  };

  return (
    <Card>
      <TitleBoxStyle>
        <h2>회원탈퇴</h2>
        <ButtonStyle onClick={withdrawalHandler}>탈퇴</ButtonStyle>
      </TitleBoxStyle>
      <p>자연치유 쉼 회원 탈퇴하기</p>
    </Card>
  );
};

export default MemberWithdrawal;

const TitleBoxStyle = styled.div`
  display: flex;
  margin-bottom: 1rem;

  h2 {
    flex: 1;
    font-size: 1.2rem;
  }
`;

const ButtonStyle = styled.button`
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid lightgrey;
  cursor: pointer;
`;
