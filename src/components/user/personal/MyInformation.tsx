import styled from "styled-components";
import Card from "../../common/card/Card";
import { MEDIA_QUERY } from "../../../const/devise";

const MyInformation = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>‖ 나의 정보</HeaderStyle>
      <CardBoxStyle>
        <ItemBoxStyle>
          <span>성명</span>
          <span>홍길동</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>이메일</span>
          <span>abc@defg.com</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>성별</span>
          <span>여성</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>SNS 연동</span>
          <span>카카오톡</span>
        </ItemBoxStyle>
      </CardBoxStyle>
    </ContainerStyle>
  );
};

export default MyInformation;

const ContainerStyle = styled.div`
  width: 100%;
  font-family: "Pretendard-Regular";
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  padding: 1rem;
`;

const CardBoxStyle = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f3f4f8;
  border-radius: 10px;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const ItemBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 25%;
  padding: 1rem;

  span:nth-child(1) {
    padding: 0.5rem;
    border-bottom: 1px dotted lightgrey;
  }

  span:nth-child(2) {
    padding: 0.5rem;
    font-weight: bold;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: row;
    width: 100%;

    span:nth-child(1) {
      border: none;
      width: 20%;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    span:nth-child(1) {
      width: 30%;
    }
  }
`;
