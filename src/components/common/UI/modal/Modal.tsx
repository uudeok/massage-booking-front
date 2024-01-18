import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";

type TProps = {
  children: React.ReactNode;
  closeModal: () => void;
  path?: string;
  height?: string;
  $top?: string;
  $radius?: string;
};

const Modal = ({
  children,
  closeModal,
  path,
  height,
  $top,
  $radius,
}: TProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <BackDropStyle onClick={() => closeModal()} />
      <ModalStyle $height={height} $top={$top} $radius={$radius}>
        {children}
      </ModalStyle>
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

const ModalStyle = styled.div<{
  $height?: string;
  $top?: string;
  $radius?: string;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  left: calc(50% - 11rem);
  width: 26rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  background-color: white;
  height: ${({ $height }) => ($height ? $height : "19rem")};
  top: ${({ $top }) => ($top ? $top : "10%")};
  border-radius: ${({ $radius }) => ($radius ? $radius : "")};

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
