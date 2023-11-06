import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

const MyMileageTable = () => {
  return (
    <SummaryBoxStyle>
      <SummaryLeftBoxStyle>
        <span>총 적립금</span>
        <span>0원</span>
      </SummaryLeftBoxStyle>
      <SummaryRightBoxStyle>
        <span>사용한 적립금</span>
        <span>0원</span>
      </SummaryRightBoxStyle>
    </SummaryBoxStyle>
  );
};

export default MyMileageTable;

const SummaryBoxStyle = styled.div`
  border: 3px solid lightgrey;
  height: 5rem;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    flex-direction: column;
    height: 6rem;
  }
`;

const SummaryLeftBoxStyle = styled.div`
  width: 50%;
  display: flex;
  padding: 0.5rem;
  border-right: 1px solid lightgrey;

  span:first-child {
    flex: 1;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    border: none;
    width: 100%;
  }
`;

const SummaryRightBoxStyle = styled.div`
  width: 50%;
  display: flex;
  padding: 0.5rem;
  span:first-child {
    flex: 1;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;
