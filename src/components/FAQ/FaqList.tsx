import styled from "styled-components";
import theme from "../../styles/theme";
import DynamicRender from "../common/map/DynamicRender";
import { FAQ_LIST } from "../../const/faq";
import { FAQ_TYPE } from "../../@types/faq";
import { CiSquarePlus } from "react-icons/ci";

const FaqList = () => {
  const renderFaq = (item: FAQ_TYPE) => (
    <ArticleStyle key={item.id}>
      <QuestionStyle>Q. {item.question}</QuestionStyle>
      <ButtonStyle>
        <CiSquarePlus />
      </ButtonStyle>
    </ArticleStyle>
  );

  return (
    <Self>
      <ContainerStyle>
        <DynamicRender data={FAQ_LIST} renderItem={renderFaq} />
      </ContainerStyle>
    </Self>
  );
};

export default FaqList;

const Self = styled.div`
  width: 60rem;
  margin: 3rem auto;
  font-family: ${theme.fonts.pretend};
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleStyle = styled.article`
  padding: 1rem;
  border-bottom: 1px solid black;
  display: flex;
`;

const QuestionStyle = styled.p`
  flex: 1;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ButtonStyle = styled.button`
  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
