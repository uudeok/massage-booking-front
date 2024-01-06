import { TNoticeDetail } from "../../../@types/notice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";
import { makeSimpleDate } from "../../../util/date";
import CommonButton from "../../common/button/CommonButton";
import RenderList from "../../common/map/RenderList";

type NoticeType = {
  key: string;
  value: string | number;
};

const Notice = ({ detail }: { detail: TNoticeDetail }) => {
  const navigate = useNavigate();

  const NOTICE_DETAIL: NoticeType[] = [
    { key: "제목", value: detail.title },
    { key: "작성자", value: detail.writer },
    { key: "작성일", value: makeSimpleDate(detail.createdAt) },
    { key: "조회수", value: detail.viewCount },
  ];

  const renderNoticeDetail = (noticeDetail: NoticeType) => (
    <HeaderItemStyle key={noticeDetail.key}>
      <span>{noticeDetail.key}</span>
      <span>{noticeDetail.value}</span>
    </HeaderItemStyle>
  );

  return (
    <>
      <HeaderBoxStyle>
        <RenderList data={NOTICE_DETAIL} renderItem={renderNoticeDetail} />
      </HeaderBoxStyle>
      <ContentBoxStyle>
        <p>{detail.content}</p>
      </ContentBoxStyle>
      <ButtonBoxStyle>
        <CommonButton
          type="rectangle"
          onClickButton={() => navigate("..")}
          width="5rem"
        >
          목록
        </CommonButton>
      </ButtonBoxStyle>
    </>
  );
};

export default Notice;

const HeaderBoxStyle = styled.div`
  border-bottom: 1px solid black;
`;

const HeaderItemStyle = styled.div`
  display: flex;
  padding: 0.5rem;

  span:first-child {
    width: 10%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.3rem;

    span:first-child {
      width: 18%;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
  border-bottom: 1px solid grey;
  line-height: 2rem;
  font-size: 1.2rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;

const ButtonBoxStyle = styled.div`
  text-align: right;
  padding: 1rem;
`;
