import styled from "styled-components";
import { buttonRoleStyle, oauthButtonStyle } from "./ButtonBase";

type Type = "round" | "rectangle" | "plain";
type Oauth = "kakao" | "naver";

export interface ButtonType {
  oauth?: Oauth;
  type?: Type;
}

type ButtonProps<T> = {
  children: React.ReactNode;
  onClickButton?: (arg?: T) => void;
  width?: string;
  height?: string;
  color?: string;
  fontFamily?: string;
  backgroundColor?: string;
  fontSize?: string;
  type?: Type;
  $padding?: string;
  $border?: string;
  hoverBackgroundColor?: string;
  oauth?: Oauth;
};

const CommonButton = <T,>({
  children,
  onClickButton,
  width,
  height,
  fontFamily,
  backgroundColor,
  fontSize,
  type,
  $padding,
  $border,
  hoverBackgroundColor,
  oauth,
}: ButtonProps<T>) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      fontFamily={fontFamily}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      $padding={$padding}
      hoverBackgroundColor={hoverBackgroundColor}
      $border={$border}
      onClick={() => onClickButton && onClickButton()}
      type={type}
      oauth={oauth}
    >
      {children}
    </ButtonStyled>
  );
};

export default CommonButton;

const ButtonStyled = styled.button<ButtonProps<any>>`
  transition: background-color 0.1s ease;
  cursor: pointer;

  width: ${($props) => $props.width || "100%"};
  height: ${($props) => $props.height || "auto"};
  color: ${($props) => ($props.color ? $props.color : "black")};
  background-color: ${($props) =>
    $props.backgroundColor ? $props.backgroundColor : "transparent"};
  font-family: ${($props) => ($props.fontFamily ? $props.fontFamily : "")};
  font-size: ${($props) => ($props.fontSize ? $props.fontSize : "")};
  padding: ${($props) => ($props.$padding ? $props.$padding : "")};
  border: ${($props) => ($props.$border ? $props.$border : "")};

  ${buttonRoleStyle};
  ${oauthButtonStyle};
`;
