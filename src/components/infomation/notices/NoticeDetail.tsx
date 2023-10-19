import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NOTICE_LIST } from "../../../const/notices";
import Notice from "./Notice";
import { MEDIA_QUERY } from "../../../const/devise";

const NoticeDetail = () => {
  const params = useParams();
  const noticeId = params.id;

  /// 게시글 id 로 API 요청해서 가져오기

  const fetchDetailData = NOTICE_LIST.filter(
    (item) => item.id === Number(noticeId)
  );

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <NoticeBoxStyle>
          <TitleStyle>공지사항</TitleStyle>
        </NoticeBoxStyle>
        {fetchDetailData.map((detail) => (
          <Notice key={detail.id} detail={detail} />
        ))}
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default NoticeDetail;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
`;

const InnerBoxStyle = styled.div`
  width: 65rem;
  margin: auto;
  padding: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 21rem;
    padding: 1rem;
  }
`;

const NoticeBoxStyle = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: 3rem;
  border-bottom: 2px solid black;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const TitleStyle = styled.h1`
  font-size: 2rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.5rem;
  }
`;
