import styled from "styled-components";
import ReactDOM from "react-dom";
import { MEDIA_QUERY } from "../../../const/devise";
import { IBackDrop, IModal } from "../../../@types/common";

const BackDrop = ({ onClose }: IBackDrop) => {
  return <BackDropStyle onClick={onClose}></BackDropStyle>;
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalStyle>
      <div>{children}</div>
    </ModalStyle>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({ children, onClose }: IModal) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

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
  left: calc(50% - 15rem);
  width: 33rem;
  height: 40rem;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 26rem;
    left: calc(50% - 13rem);
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
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
