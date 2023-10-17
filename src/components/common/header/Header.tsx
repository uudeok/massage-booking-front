import {
  HeaderContainerStyle,
  HeaderInnerContainerStyle,
  HeaderLogoBoxStyle,
  HeaderMenuBoxStyle,
  HeaderMenuInnerBoxStyle,
  HeaderMenuListStyle,
  HeaderLoginBoxStyle,
} from "./Header.style";
import { Link } from "react-router-dom";

const MENU_LIST = [
  { key: "massage", value: "프로그램 안내", id: 1 },
  { key: "membership", value: "회원권 안내", id: 2 },
  { key: "information", value: "공지사항", id: 3 },
];

const Header = () => {
  return (
    <HeaderContainerStyle>
      <HeaderInnerContainerStyle>
        <HeaderLogoBoxStyle>
          <Link to="/">자연치유 쉼</Link>
        </HeaderLogoBoxStyle>
        <HeaderMenuBoxStyle>
          <HeaderMenuInnerBoxStyle>
            <HeaderMenuListStyle>
              {MENU_LIST.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.key}`}>{item.value}</Link>
                </li>
              ))}
            </HeaderMenuListStyle>
          </HeaderMenuInnerBoxStyle>
        </HeaderMenuBoxStyle>
        <HeaderLoginBoxStyle>로그인</HeaderLoginBoxStyle>
      </HeaderInnerContainerStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
