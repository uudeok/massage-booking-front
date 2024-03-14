import styled from "styled-components";

import Search from "./Search";

const Faq = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>자주 하는 질문</HeaderStyle>
      <Search />
    </ContainerStyle>
  );
};

export default Faq;

const ContainerStyle = styled.div`
  border: 1px solid black;
`;
const HeaderStyle = styled.h2`
  font-size: 30px;
  text-align: center;
  padding: 1rem;
  margin: 3rem auto;
`;
