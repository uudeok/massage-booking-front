import { IMassageTable } from "../../@types/book";
import styled from "styled-components";
import { BOOKING_ITEM } from "../../const/massage";
import { addMinutesUnit, addComma } from "../../util";
import { MEDIA_QUERY } from "../../const/devise";

const MassageItem = ({ massage }: { massage: IMassageTable }) => {
  return (
    <div>
      <ImgBoxStyle>
        <img
          src={massage.img}
          alt={massage.item}
          width="100%"
          height="300rem"
        />
      </ImgBoxStyle>
      <ContentBoxStyle>
        <ContentTitleStyle>{BOOKING_ITEM[massage.item]}</ContentTitleStyle>
        <ContentStyle>{massage.content}</ContentStyle>
        <ContentPriceListStyle>
          {massage.detail.map((item) => (
            <div key={item.id}>
              {addMinutesUnit(item.time)} : {addComma(item.price)}
            </div>
          ))}
        </ContentPriceListStyle>
      </ContentBoxStyle>
    </div>
  );
};

export default MassageItem;

const ImgBoxStyle = styled.div`
  opacity: 0.8;
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
`;

const ContentTitleStyle = styled.div`
  margin-bottom: 1rem;
`;

const ContentStyle = styled.div`
  margin-bottom: 0.5rem;
`;

const ContentPriceListStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;
