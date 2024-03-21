import styled from "styled-components";
import OauthLogin from "../../../auth/OauthLogin";
import Modal from "./Modal";

export type TLoginModalType = {
  path: string;
  closeModal: () => void;
};

const LoginModal = ({ closeModal, ...props }: TLoginModalType) => {
  return (
    <Modal closeModal={closeModal} height="30rem">
      <CloseButtonBoxStyle>
        <CloseButtonStyle onClick={() => closeModal()}>X</CloseButtonStyle>
      </CloseButtonBoxStyle>
      <OauthLogin />
    </Modal>
  );
};

export default LoginModal;

const CloseButtonBoxStyle = styled.div`
  display: flex;
  justify-content: right;
`;

const CloseButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
`;
