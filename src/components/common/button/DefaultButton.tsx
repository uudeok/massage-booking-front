import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

type TProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  border?: string;
  width?: string;
};

const DefaultButton = ({
  children,
  backgroundColor,
  color,
  onClick,
  border,
  width,
}: TProps) => {
  return (
    <ButtonStyle
      $backgroundColor={backgroundColor}
      $color={color}
      $border={border}
      $width={width}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default DefaultButton;

const ButtonStyle = styled.button<{
  $backgroundColor?: string;
  $color?: string;
  $border?: string;
  $width?: string;
}>`
  font-family: "Pretendard-Regular";
  border: none;
  cursor: pointer;
  /* height: 3rem; */
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "whitesmoke"};
  color: ${({ $color }) => ($color ? $color : "black")};
  border: ${({ $border }) => $border};
  width: ${({ $width }) => $width};

  /* @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 8rem;
  } */
`;
