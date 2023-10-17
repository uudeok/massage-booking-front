import { IMassageTable } from "../../@types/book";
import styled from "styled-components";
import { BOOKING_ITEM } from "../../const/book";
import { MEDIA_QUERY } from "../../const/devise";

const MassageItem = ({ massage }: { massage: IMassageTable }) => {
  return (
    <div>
      <div>
        <img
          src={massage.img}
          alt={massage.item}
          width="100%"
          height="300rem"
        />
      </div>
      <ContentBoxStyle>
        <ContentTitleStyle>{BOOKING_ITEM[massage.item]}</ContentTitleStyle>
        <div>{massage.content}</div>
      </ContentBoxStyle>
    </div>
  );
};

export default MassageItem;

const ContentBoxStyle = styled.div`
  margin-top: 1rem;
`;

const ContentTitleStyle = styled.div`
  margin-bottom: 1rem;
`;
