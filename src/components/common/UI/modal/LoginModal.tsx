import styled from "styled-components";
import { useEffect } from "react";
import OauthLogin from "../../../auth/OauthLogin";
import theme from "../../../../styles/theme";

export type TLoginModalType = {
  path: string;
  closeModal: () => void;
};

const LoginModal = ({ closeModal, ...props }: TLoginModalType) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <BackDropStyle onClick={() => closeModal()} />
      <ModalStyle>
        <CloseButtonBoxStyle>
          <CloseButtonStyle onClick={() => closeModal()}>X</CloseButtonStyle>
        </CloseButtonBoxStyle>
        <OauthLogin />
      </ModalStyle>
    </>
  );
};

export default LoginModal;

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10%;
  justify-content: center;
  align-items: center;
  left: calc(50% - 10rem);
  width: 26rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  background-color: white;
  height: 30rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 26rem;
    left: calc(50% - 13rem);
  }

  @media only screen and (max-width: ${theme.devise.mobileWidth}) {
    width: 20rem;
    left: calc(50% - 10rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButtonBoxStyle = styled.div`
  display: flex;
  justify-content: right;
`;

const CloseButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
`;
