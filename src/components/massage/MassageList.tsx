import { BOOKING_MASSAGE_TABLE } from "../../const/massage";
import MassageItem from "./MassageItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const MassageList = () => {
  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <TitleStyle>프로그램 안내</TitleStyle>
        <hr style={{ marginBottom: "2rem" }}></hr>
        {BOOKING_MASSAGE_TABLE.map((massage) => (
          <ItemBoxStyle key={massage.id}>
            <MassageItem massage={massage} />
          </ItemBoxStyle>
        ))}
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default MassageList;

const ContainerStyle = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
`;

const InnerBoxStyle = styled.ul`
  width: 65rem;
  margin: auto;
  padding: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 60%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;

const TitleStyle = styled.h1`
  font-size: 2rem;
  margin-top: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.5rem;
  }
`;

const ItemBoxStyle = styled.li`
  text-align: center;
  padding: 1rem;
`;
