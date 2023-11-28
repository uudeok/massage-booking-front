import styled from "styled-components";
import { MEDIA_QUERY } from "../../../../const/devise";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../stores/modalSlice";
import OauthLogin from "../../../auth/OauthLogin";

export type TLoginModalType = {
  path: string;
};

const LoginModal = ({ ...props }: TLoginModalType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalStyle>
      <CloseButtonBoxStyle>
        <CloseButtonStyle onClick={() => dispatch(closeModal())}>
          X
        </CloseButtonStyle>
      </CloseButtonBoxStyle>
      <OauthLogin />
    </ModalStyle>
  );
};

export default LoginModal;

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
  /* border-radius: 14px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  background-color: white;
  height: 30rem;

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

const CloseButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
`;
