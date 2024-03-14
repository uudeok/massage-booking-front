import styled from "styled-components";
import Search from "./Search";
import FaqList from "./FaqList";
import theme from "../../styles/theme";

const Faq = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>자주 하는 질문</HeaderStyle>
      <Search />
      <FaqList />
    </ContainerStyle>
  );
};

export default Faq;

const ContainerStyle = styled.div``;
const HeaderStyle = styled.h2`
  font-size: 33px;
  text-align: center;
  padding: 1rem;
  margin: 3rem auto;
  font-family: ${theme.fonts.pretend};
`;
