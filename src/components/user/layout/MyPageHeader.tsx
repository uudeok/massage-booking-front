import styled from "styled-components";

const MyPageHeader = () => {
  return (
    <LayoutStyle>
      <HeaderStyle>마이페이지</HeaderStyle>
    </LayoutStyle>
  );
};

export default MyPageHeader;

const LayoutStyle = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 15rem;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const HeaderStyle = styled.h1`
  font-family: "GmarketSansMedium";
  font-size: 2rem;
`;
