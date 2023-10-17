import styled from "styled-components";

const NoticeDetail = () => {
  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <NoticeStyle>
          <TitleStyle>공지사항</TitleStyle>
        </NoticeStyle>
        <div>
          <div>
            <span>제목</span>
            <span></span>
          </div>
          <div>
            <span>작성자</span>
            <span></span>
          </div>
          <div>
            <span>작성일</span>
            <span></span>
          </div>
        </div>
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
`;

const NoticeStyle = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: 3rem;
  border-bottom: 2px solid black;
`;

const TitleStyle = styled.h1`
  font-size: 2rem;
`;
