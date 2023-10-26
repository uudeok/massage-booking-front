import styled from "styled-components";
import { Link } from "react-router-dom";
import { MY_PAGE_TABLE } from "../../const/mypage";

const MyPageSide = () => {
  return (
    <SideLayoutStyle>
      <HeaderStyle>‖ 나의 내역</HeaderStyle>
      <ListStyled>
        {MY_PAGE_TABLE.map((item, index) => (
          <ItemStyled key={index}>
            <Link to={`/mypage/${item.key}`}>{item.value}</Link>
          </ItemStyled>
        ))}
      </ListStyled>
    </SideLayoutStyle>
  );
};

export default MyPageSide;

const SideLayoutStyle = styled.div`
  padding: 1rem;
  width: 20rem;
  font-family: "Pretendard-Regular";
`;

const HeaderStyle = styled.h2`
  font-size: 1.5rem;
`;

const ListStyled = styled.ul`
  margin-top: 1rem;
`;

const ItemStyled = styled.li`
  border: 1px solid lightgrey;
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
`;
