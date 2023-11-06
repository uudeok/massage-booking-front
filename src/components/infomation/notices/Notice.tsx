import { TNotice } from "../../../@types/notice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";

const Notice = ({ detail }: { detail: TNotice }) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBoxStyle>
        <HeaderItemStyle>
          <span>제목</span>
          <span>{detail.title}</span>
        </HeaderItemStyle>
        <HeaderItemStyle>
          <span>작성자</span>
          <span>{detail.writer}</span>
        </HeaderItemStyle>
        <HeaderItemStyle>
          <span>작성일</span>
          <span>{detail.date}</span>
        </HeaderItemStyle>
        <HeaderItemStyle>
          <span>조회수</span>
          <span>{detail.id}</span>
        </HeaderItemStyle>
      </HeaderBoxStyle>
      <ContentBoxStyle>
        <p>{detail.content}</p>
      </ContentBoxStyle>
      <ButtonBoxStyle>
        <ButtonStyle onClick={() => navigate("..")}>목록</ButtonStyle>
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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;

const ButtonBoxStyle = styled.div`
  text-align: right;
  padding: 1rem;
`;

const ButtonStyle = styled.button`
  background-color: white;
  border: 1px solid grey;
  cursor: pointer;
  width: 5rem;
  color: black;
`;
