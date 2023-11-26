import ProgramItem from "./ProgramItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import Banner from "../../banner/Banner";
import LoadingBar from "../../common/loading/LoadingBar";
import { useGetMassageListQuery } from "../../../api/massage/massageQuery";

const ProgramList = () => {
  const { data: massageList, isFetching } = useGetMassageListQuery();
  console.log(massageList);

  return (
    <>
      <Banner img="program.jpg">
        {/* <BannerTitleStyle>자연치유 쉼 프로그램</BannerTitleStyle>
        <span>자연치유 쉼이 준비한 프로그램!</span>
        <span>다양한 마사지를 경험해보세요.</span> */}
      </Banner>
      {isFetching && <LoadingBar />}
      <ContainerStyle>
        <InnerBoxStyle>
          <TitleStyle>프로그램 안내</TitleStyle>
          <hr style={{ marginBottom: "2rem" }}></hr>
          {massageList &&
            massageList.map((massage) => (
              <ItemBoxStyle key={massage.id}>
                <ProgramItem massage={massage} />
              </ItemBoxStyle>
            ))}
        </InnerBoxStyle>
      </ContainerStyle>
    </>
  );
};

export default ProgramList;

const BannerTitleStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.2rem;
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "GmarketSansMedium";
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
