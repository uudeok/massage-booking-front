import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import PasswordUpdate from "./PasswordUpdate";
import MemberWithdrawal from "./MemberWithdrawal";
import WithdrawalForm from "./WithdrawalForm";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../common/UI/Modal";

const MySetting = () => {
  const { modalIsShown, setModalIsShown, hideModalHandler } = useModal();

  const showWithdrawalForm = modalIsShown && (
    <Modal onClose={hideModalHandler} height="15rem">
      <WithdrawalForm onClose={hideModalHandler} />
    </Modal>
  );

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        {showWithdrawalForm}
        <HeaderStyle>‖ 회원 정보</HeaderStyle>
        <ListBoxStyle>
          <PasswordUpdate />
          <MemberWithdrawal showModal={setModalIsShown} />
        </ListBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default MySetting;

const ContainerStyle = styled.div`
  width: 100%;
`;

const InnerBoxStyle = styled.div`
  padding: 1rem;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;

const ListBoxStyle = styled.div`
  margin-top: 1rem;
  width: 80%;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 90%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;
