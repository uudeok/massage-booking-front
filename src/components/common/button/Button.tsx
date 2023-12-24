import styled from "styled-components";

type TProps<T> = {
  children: React.ReactNode;
  width?: string;
  color?: string;
  fontFamily?: string;
  backgroundColor?: string;
  hover?: string;
  fontSize?: string;
  textAlign?: string;
  border?: string;
  onClickButton?: (arg?: T) => void;
  padding?: string;
};

const CommonButton = <T extends {}>({
  children,
  width,
  color,
  fontFamily,
  backgroundColor,
  hover,
  fontSize,
  textAlign,
  border,
  onClickButton,
  padding,
}: TProps<T>) => {
  return (
    <ButtonStyle
      $width={width}
      $color={color}
      $fontFamily={fontFamily}
      $backgroundColor={backgroundColor}
      $hover={hover}
      $fontSize={fontSize}
      $textAlign={textAlign}
      $border={border}
      $padding={padding}
      onClick={() => onClickButton && onClickButton()}
    >
      {children}
    </ButtonStyle>
  );
};

export default CommonButton;

const ButtonStyle = styled.button<{
  $width?: string;
  $color?: string;
  $fontFamily?: string;
  $backgroundColor?: string;
  $hover?: string;
  $fontSize?: string;
  $textAlign?: string;
  $border?: string;
  $padding?: string;
}>`
  border-radius: 50px;
  cursor: pointer;
  padding: 0.5rem;

  width: ${({ $width }) => ($width ? $width : "100%")};
  color: ${({ $color }) => ($color ? $color : "black")};
  font-family: ${({ $fontFamily }) => ($fontFamily ? $fontFamily : "")};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "transparent"};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "")};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "")};
  border: ${({ $border }) => ($border ? $border : "")};
  padding: ${({ $padding }) => ($padding ? $padding : "")};

  &:hover {
    color: ${({ $hover }) => ($hover ? $hover : "")};
  }
`;
