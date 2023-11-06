import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

type TProps = {
  children: React.ReactNode;
  onClose: () => void;
  height?: string;
  backgroundColor?: string;
};

const DefaultModal = ({
  children,
  onClose,
  height,
  backgroundColor,
}: TProps) => {
  return (
    <>
      <BackDropStyle onClick={onClose} />
      <ModalStyle $height={height} $backgroundColor={backgroundColor}>
        <CloseButtonBoxStyle>
          <CloseButtonStyle
            onClick={onClose}
            $backgroundColor={backgroundColor}
          >
            X
          </CloseButtonStyle>
        </CloseButtonBoxStyle>
        {children}
      </ModalStyle>
    </>
  );
};

export default DefaultModal;

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
  top: 7%;
  justify-content: center;
  align-items: center;
  left: calc(50% - 15rem);
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 33rem;
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

const CloseButtonBoxStyle = styled.div`
  display: flex;
  justify-content: right;
`;

const CloseButtonStyle = styled.button<{ $backgroundColor?: string }>`
  border: none;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "white"};
  color: whitesmoke;
`;
