import styled, { css } from "styled-components";
import { buttonRoleStyle, oauthButtonStyle } from "./ButtonBase";

type Type = "round" | "rectangle" | "plain";
type Oauth = "kakao" | "naver";

export interface ButtonType {
  $oauth?: Oauth;
  type?: Type;
}

type ButtonStyleProps = {
  width?: string;
  height?: string;
  color?: string;
  fontFamily?: string;
  $backgroundColor?: string;
  fontSize?: string;
  type?: Type;
  $padding?: string;
  $border?: string;
  hoverBackgroundColor?: string;
  $oauth?: Oauth;
  textAlign?: string;
  $borderRadius?: string;
  disabled?: boolean;
  $hoverColor?: string;
};

type ButtonProps<T> = {
  children: React.ReactNode;
  onClickButton?: (arg?: T) => void;
  width?: string;
  height?: string;
  color?: string;
  fontFamily?: string;
  $backgroundColor?: string;
  fontSize?: string;
  type?: Type;
  $padding?: string;
  $border?: string;
  hoverBackgroundColor?: string;
  $oauth?: Oauth;
  textAlign?: string;
  $borderRadius?: string;
  disabled?: boolean;
  $hoverColor?: string;
};

const CommonButton = <T,>({
  children,
  onClickButton,
  width,
  height,
  fontFamily,
  $backgroundColor,
  fontSize,
  type,
  $padding,
  $border,
  hoverBackgroundColor,
  $oauth,
  $borderRadius,
  disabled,
  color,
  $hoverColor,
}: ButtonProps<T>) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      fontFamily={fontFamily}
      $backgroundColor={$backgroundColor}
      fontSize={fontSize}
      $padding={$padding}
      hoverBackgroundColor={hoverBackgroundColor}
      $border={$border}
      onClick={() => onClickButton && onClickButton()}
      type={type}
      $oauth={$oauth}
      $borderRadius={$borderRadius}
      disabled={disabled}
      color={color}
      $hoverColor={$hoverColor}
    >
      {children}
    </ButtonStyled>
  );
};

export default CommonButton;

const ButtonStyled = styled.button<ButtonStyleProps>`
  transition: background-color 0.1s ease;
  cursor: pointer;

  width: ${($props) => $props.width || "100%"};
  height: ${($props) => $props.height || "auto"};
  color: ${($props) => ($props.color ? $props.color : "black")};
  background-color: ${($props) =>
    $props.$backgroundColor ? $props.$backgroundColor : "transparent"};
  font-family: ${($props) => ($props.fontFamily ? $props.fontFamily : "")};
  font-size: ${($props) => ($props.fontSize ? $props.fontSize : "")};
  padding: ${($props) => ($props.$padding ? $props.$padding : "")};

  border: ${($props) => ($props.$border ? $props.$border : "")};
  border-radius: ${($props) =>
    $props.$borderRadius ? $props.$borderRadius : ""};
  color: ${($props) => ($props.color ? $props.color : "black")};

  &:hover {
    color: ${($props) => ($props.$hoverColor ? $props.$hoverColor : "")};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
      background-color: #dddddd;
      border: none !important;
    `}

  ${buttonRoleStyle};
  ${oauthButtonStyle};
`;
