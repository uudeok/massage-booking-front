import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import { palette } from "../../../styles/palette";

type TProps<T> = {
  text: string;
  onClickButton: (props: T) => void;
  argument: T;
};

const CardButton = <T extends {}>({
  text,
  onClickButton,
  argument,
}: TProps<T>) => {
  return (
    <ButtonStyle
      onClick={() => {
        onClickButton(argument);
      }}
    >
      {text}
    </ButtonStyle>
  );
};

export default CardButton;

const ButtonStyle = styled.button`
  background-color: ${palette.white};
  color: ${palette.black};
  border: 2px solid ${palette.grey};
  padding: 0.7rem;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: ${palette.grey};
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
  }
`;
