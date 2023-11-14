import BookingNotice from "../../../booking/BookingNotice";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../../../const/devise";
import { useEffect } from "react";

const NoticeModal = ({ ...props }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalStyle>
      <BookingNotice {...props} />
    </ModalStyle>
  );
};

export default NoticeModal;

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
  height: 30rem;
  background-color: white;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 26rem;
    left: calc(50% - 13rem);
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    width: 20rem;
    height: 35rem;
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
