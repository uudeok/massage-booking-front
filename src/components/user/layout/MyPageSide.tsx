import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../styles/theme";
import RenderList from "../../common/map/DynamicRender";

type MypageMenuType = {
  key: string;
  value: string;
};

const MY_PAGE_TABLE = [
  { key: "order", value: "나의 예약" },
  { key: "information", value: "회원정보" },
  { key: "withdraw", value: "회원탈퇴" },
] as MypageMenuType[];

const MyPageSide = () => {
  const renderSideMenu = (item: MypageMenuType) => (
    <ItemStyled key={item.key}>
      <Link to={`/mypage/${item.key}`}>{item.value}</Link>
    </ItemStyled>
  );

  return (
    <SideLayoutStyle>
      <HeaderStyle>‖ 나의 정보</HeaderStyle>
      <ListStyled>
        <RenderList data={MY_PAGE_TABLE} renderItem={renderSideMenu} />
      </ListStyled>
    </SideLayoutStyle>
  );
};

export default MyPageSide;

const SideLayoutStyle = styled.div`
  padding: 1rem;
  width: 25rem;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
  }
`;

const HeaderStyle = styled.h2`
  font-size: 1.5rem;
`;

const ListStyled = styled.ul`
  margin-top: 1rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    width: 100%;
  }
`;

const ItemStyled = styled.li`
  border: 1px solid lightgrey;
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    font-size: 0.8rem;
  }
`;
