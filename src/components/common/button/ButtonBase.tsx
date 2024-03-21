import { css } from "styled-components";
import { ButtonType } from "./CommonButton";
import theme from "../../../styles/theme";

export const buttonRoleStyle = css<ButtonType>`
  ${({ type }) => {
    if (type === "round") {
      return css`
        border-radius: 50px;
      `;
    }

    if (type === "rectangle") {
      return css`
        border: 1px solid black;
      `;
    }

    if (type === "plain") {
      return css`
        background-color: transparent;
        cursor: pointer;
        color: black;
        font-family: ${theme.fonts.pretend}
        font-size: 1rem;
        border: none;
        text-align: left;
        &:hover {
          color: ${theme.palette.grey};
        }
      `;
    }
  }}
`;

export const oauthButtonStyle = css<ButtonType>`
  ${({ $oauth }) => {
    if ($oauth === "kakao") {
      return css`
        font-family: ${theme.fonts.pretend};
        background: url(//storage.keepgrow.com/admin/campaign/20200611043456590.svg)
          no-repeat center;
        background-position: 28px;
        background-color: ${theme.palette.kakaoColor};
        font-size: 1rem;
        cursor: pointer;
        margin-top: 1rem;
        width: 100%;
        color: black;
        border-radius: 10px;
        text-align: center;
        border: none;
        padding: 1rem;
      `;
    }

    if ($oauth === "naver") {
      return css`
        font-family: ${theme.fonts.pretend};
        background: url("/naverIcon.png") no-repeat center;
        background-position: 18px;
        background-size: 40px;
        text-align: center;
        font-size: 1rem;
        cursor: pointer;
        width: 100%;
        color: #fff;
        background-color: ${theme.palette.naverColor};
        border-radius: 10px;
        text-align: center;
        border: none;
        padding: 1rem;
      `;
    }
  }}
`;
