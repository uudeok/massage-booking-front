import { Link } from "react-router-dom";
import styled from "styled-components";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useState } from "react";

const HEADER_MENU_LIST = [
  { key: "book", value: "예약하기", id: 1 },
  { key: "program", value: "프로그램 안내", id: 2 },
  { key: "information", value: "회원권 안내", id: 3 },
  { key: "notice", value: "공지사항", id: 4 },
  { key: "information/contact", value: "오시는 길", id: 5 },
];

const HeaderDropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuBarHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MenuBarStyle>
      <MenuButtonStyle onClick={openMenuBarHandler}>
        {isOpen ? <TfiClose /> : <TfiAlignJustify />}
      </MenuButtonStyle>
      <MenuListStyle $isOpen={isOpen}>
        {HEADER_MENU_LIST.map((menu) => (
          <li key={menu.id}>
            <Link to={`/${menu.key}`}>{menu.value}</Link>
          </li>
        ))}
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
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  z-index: 1;
  font-weight: 400;
  background-color: #f9f9f9;
  width: 100%;
  text-align: center;
  font-family: "Pretendard-Regular";

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
  /* border: 1px solid blue; */
  background-color: transparent;
  color: black;
  border: none;
  z-index: 100;
  font-weight: 900;

  &:hover ${MenuListStyle} {
    display: block;
  }
`;
