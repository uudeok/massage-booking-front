import RenderList from "../common/map/DynamicRender";
import {
  FooterContainerStyle,
  FooterInnerContainerStyle,
  FooterTopBoxStyle,
  FooterSymbolBoxStyle,
  FooterInfoListStyle,
  FooterInfoItemStyle,
} from "./Footer.style";

type FooterType = {
  key: string;
  value: string;
};

const FOOTER_BUSINESS = [
  { key: "대표", value: "홍길동" },
  { key: "주소", value: "경기 파주시 가람로" },
  { key: "전화번호", value: "031-123-4567" },
  { key: "사업자등록번호", value: "110-01-01" },
] as FooterType[];

const Footer = () => {
  const renderFooterItem = (item: FooterType) => (
    <FooterInfoItemStyle key={item.key}>
      {item.key} : {item.value}
    </FooterInfoItemStyle>
  );

  return (
    <FooterContainerStyle>
      <FooterInnerContainerStyle>
        <FooterTopBoxStyle>
          <FooterSymbolBoxStyle>자연치유 쉼</FooterSymbolBoxStyle>
          <FooterInfoListStyle>
            <RenderList data={FOOTER_BUSINESS} renderItem={renderFooterItem} />
          </FooterInfoListStyle>
        </FooterTopBoxStyle>
      </FooterInnerContainerStyle>
    </FooterContainerStyle>
  );
};

export default Footer;
