import {
  ContainerStyle,
  InnerContainerStyle,
  LogoBoxStyle,
  MenuBoxStyle,
  MenuInnerBoxStyle,
  MenuListStyle,
  LoginBoxStyle,
} from "./Header.style";
import { Link } from "react-router-dom";

const MENU_LIST = [
  { key: "massage", value: "프로그램 안내", id: 1 },
  { key: "membership", value: "회원권 안내", id: 2 },
  { key: "notice", value: "공지사항", id: 3 },
];

const Header = () => {
  return (
    <ContainerStyle>
      <InnerContainerStyle>
        <LogoBoxStyle>
          <Link to="/">자연치유 쉼</Link>
        </LogoBoxStyle>
        <MenuBoxStyle>
          <MenuInnerBoxStyle>
            <MenuListStyle>
              {MENU_LIST.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.key}`}>{item.value}</Link>
                </li>
              ))}
            </MenuListStyle>
          </MenuInnerBoxStyle>
        </MenuBoxStyle>
        <LoginBoxStyle>로그인</LoginBoxStyle>
      </InnerContainerStyle>
    </ContainerStyle>
  );
};

export default Header;
