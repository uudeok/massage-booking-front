import {
  FooterContainerStyle,
  FooterInnerContainerStyle,
  FooterLeftBoxStyle,
  FooterRightBoxStyle,
  FooterSymbolBoxStyle,
  FooterInfoListStyle,
  FooterInfoItemStyle,
  FooterLogoItemStyle,
} from "./Footer.style";
import { FOOTER_INFO, FOOTER_LOGO } from "../../../const/footer";

const Footer = () => {
  return (
    <FooterContainerStyle>
      <FooterInnerContainerStyle>
        <FooterLeftBoxStyle>
          <FooterSymbolBoxStyle>
            <strong>자연치유 쉼 | 대표 : 홍길동 </strong>
          </FooterSymbolBoxStyle>
          <FooterInfoListStyle>
            {FOOTER_INFO.map((item) => (
              <FooterInfoItemStyle key={item.key}>
                {item.key} : {item.value}
              </FooterInfoItemStyle>
            ))}
          </FooterInfoListStyle>
        </FooterLeftBoxStyle>
        <FooterRightBoxStyle>
          {FOOTER_LOGO.map((item) => (
            <FooterLogoItemStyle key={item.key}>
              {item.value}
            </FooterLogoItemStyle>
          ))}
        </FooterRightBoxStyle>
      </FooterInnerContainerStyle>
    </FooterContainerStyle>
  );
};

export default Footer;
