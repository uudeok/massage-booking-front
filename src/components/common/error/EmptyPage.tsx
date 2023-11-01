import styled from "styled-components";

const EmptyPage = () => {
  return (
    <LayoutStyle>
      <ErrorStyle>데이터가 없습니다😅</ErrorStyle>
    </LayoutStyle>
  );
};

export default EmptyPage;

const LayoutStyle = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorStyle = styled.h1`
  color: black;
  font-family: "GmarketSansMedium";
  font-size: 1.2rem;
`;
