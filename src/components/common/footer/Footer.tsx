import {
  FooterContainerStyle,
  FooterInnerContainerStyle,
  FooterLeftBoxStyle,
  FooterRightBoxStyle,
  FooterLogoItemStyle,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainerStyle>
      <FooterInnerContainerStyle>
        <FooterLeftBoxStyle>
          <div>
            <span>자연치유 쉼</span>
            <span>자연치유 쉼</span>
            <span>자연치유 쉼</span>
            <span>자연치유 쉼</span>
            <span>자연치유 쉼</span>
          </div>
          <div>
            <span>사업자등록번호 : 12345</span>
            <span>사업자등록번호 : 12345</span>
            <span>사업자등록번호 : 12345</span>
            <span>사업자등록번호 : 12345</span>
            <span>사업자등록번호 : 12345</span>
          </div>
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
