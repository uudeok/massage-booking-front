import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import { palette } from "../../../styles/palette";

type TProps = {
  text: string;
  onClickButton: (props: any) => void;
  argument: string | number;
};

const CardButton = ({ text, onClickButton, argument }: TProps) => {
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
