import {
  HeaderContainerStyle,
  HeaderInnerContainerStyle,
  HeaderLogoBoxStyle,
  HeaderMenuBoxStyle,
  HeaderMenuInnerBoxStyle,
  HeaderMenuListStyle,
  HeaderLoginBoxStyle,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainerStyle>
      <HeaderInnerContainerStyle>
        <HeaderLogoBoxStyle>자연치유 쉼</HeaderLogoBoxStyle>
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
        <HeaderLoginBoxStyle>login</HeaderLoginBoxStyle>
      </HeaderInnerContainerStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
