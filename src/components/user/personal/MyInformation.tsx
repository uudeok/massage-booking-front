import styled from "styled-components";
import theme from "../../../styles/theme";
import RenderList from "../../common/map/RenderList";
import { makeSimpleDate } from "../../../util/date";

type MyInfoType = {
  key: string;
  value: string;
};

const MyInformation = () => {
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo!);

  const MY_INFO = [
    { key: "성명", value: user.nickname },
    { key: "이메일", value: user.email ? user.email : "연동안됨" },
    { key: "가입일자", value: makeSimpleDate(user.createdAt) },
    { key: "SNS 연동", value: "카카오톡" },
  ] as MyInfoType[];

  const renderMyInfo = (item: MyInfoType) => (
    <ItemBoxStyle key={item.key}>
      <span>{item.key}</span>
      <span>{item.value}</span>
    </ItemBoxStyle>
  );

  return (
    <ContainerStyle>
      <HeaderStyle>‖ 나의 정보</HeaderStyle>
      <CardBoxStyle>
        <RenderList data={MY_INFO} renderItem={renderMyInfo} />
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

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
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

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    flex-direction: row;
    width: 100%;

    span:nth-child(1) {
      border: none;
      width: 20%;
    }
  }

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    span:nth-child(1) {
      width: 30%;
    }
  }
`;
