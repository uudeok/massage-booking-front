import styled from "styled-components";
import { MEDIA_QUERY } from "../../../../const/devise";
import { useEffect } from "react";
import DefaultButton from "../../button/DefaultButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../stores/modalSlice";

type TProps = {
  content?: string;
  confirm?: string;
};

const TwoBtnModal = ({ ...props }: TProps) => {
  const dispatch = useDispatch();
  console.log(props);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalStyle>
      <ContainerStyle>
        <IconStyle>💡</IconStyle>
        <ContentStyle>
          <div>{props.content}</div>
          <div>{props.confirm}</div>
        </ContentStyle>
        <ButtonBoxStyle>
          <DefaultButton width="10rem" onClick={() => dispatch(closeModal())}>
            취소
          </DefaultButton>
          <DefaultButton width="10rem" backgroundColor="#afc9a4" color="white">
            확인
          </DefaultButton>
        </ButtonBoxStyle>
      </ContainerStyle>
    </ModalStyle>
  );
};

export default TwoBtnModal;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  height: 100%;
  font-family: "Pretendard-Regular";
`;

const IconStyle = styled.div`
  font-size: 1.5rem;
`;

const ContentStyle = styled.div`
  font-size: 1.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1rem;
  }
`;

const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  height: 15rem;
  background-color: white;

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
