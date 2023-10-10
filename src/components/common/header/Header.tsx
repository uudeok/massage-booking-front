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
              <li>메뉴1</li>
              <li>메뉴2</li>
              <li>메뉴3</li>
              <li>메뉴4</li>
            </HeaderMenuListStyle>
          </HeaderMenuInnerBoxStyle>
        </HeaderMenuBoxStyle>
        <HeaderLoginBoxStyle>로그인</HeaderLoginBoxStyle>
      </HeaderInnerContainerStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
