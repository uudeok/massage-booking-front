import { TMassageTable } from "../../../@types/massage";
import styled from "styled-components";
import { MASSAGE_ITEM } from "../../../const/book/massage";
import { addComma } from "../../../util/price";
import { MEDIA_QUERY } from "../../../const/devise";
import { addMinutesUnit } from "../../../util/time";

const ProgramItem = ({ massage }: { massage: TMassageTable }) => {
  return (
    <>
      <ImgBoxStyle>
        <img src={massage.img} alt={massage.item} width="90%" height="300rem" />
      </ImgBoxStyle>
      <ContentBoxStyle>
        <ContentTitleStyle>{MASSAGE_ITEM[massage.item]}</ContentTitleStyle>
        <ContentStyle>{massage.content}</ContentStyle>
        <ContentPriceListStyle>
          {massage.detail.map((massage) => (
            <div key={massage.id}>
              {addMinutesUnit(massage.time)} : {addComma(massage.price)}
            </div>
          ))}
        </ContentPriceListStyle>
      </ContentBoxStyle>
    </>
  );
};

export default ProgramItem;

const ImgBoxStyle = styled.div`
  opacity: 0.9;
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
`;

const ContentTitleStyle = styled.div`
  margin-bottom: 1rem;
`;

const ContentStyle = styled.div`
  margin-bottom: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.8rem;
  }
`;

const ContentPriceListStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    flex-direction: column;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.8rem;
  }
`;
