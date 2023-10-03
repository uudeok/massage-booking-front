import {
  FooterContainerStyle,
  FooterInnerContainerStyle,
  FooterLeftBoxStyle,
  FooterRightBoxStyle,
  FooterLogoItemStyle,
} from "./Footer.style";
import { FOOTER_INFO } from "../../../const/footer";

const Footer = () => {
  return (
    <FooterContainerStyle>
      <FooterInnerContainerStyle>
        <FooterLeftBoxStyle>
          <h3>자연치유 쉼</h3>
          <ul>
            {FOOTER_INFO.map((item) => (
              <li key={item.key}>
                {item.key} : {item.value}
              </li>
            ))}
          </ul>
        </FooterLeftBoxStyle>
        <FooterRightBoxStyle>
          <FooterLogoItemStyle>로고1</FooterLogoItemStyle>
          <FooterLogoItemStyle>로고2</FooterLogoItemStyle>
          <FooterLogoItemStyle>로고3</FooterLogoItemStyle>
          <FooterLogoItemStyle>로고4</FooterLogoItemStyle>
        </FooterRightBoxStyle>
      </FooterInnerContainerStyle>
    </FooterContainerStyle>
  );
};

export default Footer;
