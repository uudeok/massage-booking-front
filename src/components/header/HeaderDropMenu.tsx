import { Link } from "react-router-dom";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import RenderList from "../common/map/DynamicRender";

type HeaderDrop = {
  key: string;
  value: string;
};

const HEADER_MENU_LIST = [
  { key: "book", value: "예약하기" },
  { key: "program", value: "프로그램 안내" },
  { key: "information", value: "회원권 안내" },
  { key: "notice", value: "공지사항" },
  { key: "faq", value: "자주하는 질문" },
  { key: "information/contact", value: "오시는 길" },
] as HeaderDrop[];

const HeaderDropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuBarHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const renderHeaderItem = (item: HeaderDrop) => (
    <li key={item.key}>
      <Link to={`/${item.key}`}>{item.value}</Link>
    </li>
  );

  return (
    <MenuBarStyle>
      <MenuButtonStyle onClick={openMenuBarHandler}>
        {isOpen ? <TfiClose /> : <TfiAlignJustify />}
      </MenuButtonStyle>
      <MenuListStyle $isOpen={isOpen}>
        <RenderList data={HEADER_MENU_LIST} renderItem={renderHeaderItem} />
      </MenuListStyle>
    </MenuBarStyle>
  );
};

export default HeaderDropMenu;

const MenuBarStyle = styled.nav`
  position: relative;
  display: flex;
  justify-content: right;
  width: 100%;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuListStyle = styled.ul<{ $isOpen: boolean }>`
  display: block;
  position: absolute;
  z-index: 1;
  font-weight: 400;
  background-color: #f9f9f9;
  width: 100%;
  text-align: center;
  font-family: ${theme.fonts.pretend};
  transition: transform 0.3s ease;

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};

  a {
    display: block;
    text-decoration: none;
    color: rgb(37, 37, 37);
    font-size: 12px;
    padding: 12px 20px;

    &:hover {
      background-color: white;
    }
  }
`;

const MenuButtonStyle = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: none;
  z-index: 100;
  font-weight: 900;
`;
