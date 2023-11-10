import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MEDIA_QUERY } from "../../../const/devise";
import Banner from "../../banner/Banner";

const CONTACT_INFO = [
  { key: "주소", value: "경기도 파주시 가람로 134번길 53" },
  { key: "전화번호", value: "010-1234-5678" },
  { key: "영업시간", value: "월-토 : AM 09:00 ~ PM 21:00" },
];

const ContactList = () => {
  return (
    <>
      <Banner img="contact.jpg">
        <BannerTitleStyle>자연치유 쉼</BannerTitleStyle>
        <span>뻐근한 목과 어깨, 콕콕 쑤시는 허리</span>
        <span>단순히 뭉친 근육을 풀어주는 것이 아닌</span>
        <span>체형 교정을 통해 밸런스를 잡아드려요</span>
      </Banner>
      <ContentBoxStyle>
        <LeftBoxStyle>
          <h3>자연치유 쉼</h3>
          <h4>오시는 길</h4>
        </LeftBoxStyle>
        <RightBoxStyle>
          {CONTACT_INFO.map((item, index) => (
            <div key={index}>
              <span>{item.key}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </RightBoxStyle>
        <MapBoxStyle>
          <MapStyle
            center={{ lat: 37.737494352893385, lng: 126.76590421100259 }}
          >
            <MapMarker
              position={{ lat: 37.737494352893385, lng: 126.76590421100259 }}
            ></MapMarker>
          </MapStyle>
        </MapBoxStyle>
      </ContentBoxStyle>
    </>
  );
};

export default ContactList;

const BannerTitleStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContentBoxStyle = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  width: 80%;
  margin: 2rem auto;
  padding: 3rem;
  display: flex;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
    width: 100%;
    border-top: none;
    border-bottom: none;
  }
`;

const LeftBoxStyle = styled.div`
  width: 25%;
  padding: 1rem;
  font-size: 2rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

const RightBoxStyle = styled.div`
  width: 30%;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  span {
    padding: 0.25rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

const MapBoxStyle = styled.div`
  width: 45%;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border: 1px solid black;
  }
`;

const MapStyle = styled(Map)`
  width: 100%;
  height: 360px;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0;
    height: 300px;
  }
`;
