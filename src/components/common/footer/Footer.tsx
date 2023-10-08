import {
  FooterContainerStyle,
  FooterInnerContainerStyle,
  FooterLeftBoxStyle,
  FooterRightBoxStyle,
  FooterSymbolBoxStyle,
  FooterInfoListStyle,
  FooterInfoItemStyle,
} from "./Footer.style";
import { FOOTER_BUSINESS } from "../../../const/footer";

const Footer = () => {
  return (
    <FooterContainerStyle>
      <FooterInnerContainerStyle>
        <FooterLeftBoxStyle>
          <FooterSymbolBoxStyle>자연치유 쉼</FooterSymbolBoxStyle>
          <FooterInfoListStyle>
            {FOOTER_BUSINESS.map((info) => (
              <FooterInfoItemStyle key={info.id}>
                {info.key} : {info.value}
              </FooterInfoItemStyle>
            ))}
          </FooterInfoListStyle>
        </FooterLeftBoxStyle>
        <FooterRightBoxStyle>
          {/* {FOOTER_SNS.map((item) => (
            <FooterLogoItemStyle key={item.key}>
              {item.value}
            </FooterLogoItemStyle>
          ))} */}
        </FooterRightBoxStyle>
      </FooterInnerContainerStyle>
    </FooterContainerStyle>
  );
};

export default Footer;
