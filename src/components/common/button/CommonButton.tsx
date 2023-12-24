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
  padding?: string;
  border?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  oauth?: Oauth;
};

const CommonButton = <T,>({ ...props }: ButtonProps<T>) => {
  return (
    <ButtonStyled
      {...props}
      onClick={() => props.onClickButton && props.onClickButton()}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default CommonButton;

const ButtonStyled = styled.button<ButtonProps<any>>`
  transition: background-color 0.1s ease;
  cursor: pointer;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: ${(props) => (props.border ? props.border : "")};

  ${buttonRoleStyle};
  ${oauthButtonStyle};

  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  }
`;
