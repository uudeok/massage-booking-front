import styled from "styled-components";
import ReactDOM from "react-dom";
import { MEDIA_QUERY } from "../../../const/devise";
import { useEffect } from "react";

type TBackDrop = {
  onClose: () => void;
};

type TModal = {
  onClose: () => void;
  children: React.ReactNode;
  height?: string;
  backgroundColor?: string;
};

const BackDrop = ({ onClose }: TBackDrop) => {
  return <BackDropStyle onClick={onClose}></BackDropStyle>;
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({ children, onClose, height, backgroundColor }: TModal) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalStyle $height={height} $backgroundColor={backgroundColor}>
          {children}
        </ModalStyle>,
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

const ModalStyle = styled.div<{ $height?: string; $backgroundColor?: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10%;
  justify-content: center;
  align-items: center;
  left: calc(50% - 15rem);
  width: 33rem;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "white"};
  height: ${({ $height }) => ($height ? $height : "40rem")};

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
