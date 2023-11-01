import styled from "styled-components";
import { NOTICE_CATEGORIES } from "../../../const/notices";
import NoticeItem from "./NoticeItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";
import Paging from "../../pagination/Paging";
import { NOTICE_CATEGORY_KEYS, TNotice } from "../../../@types/notice";
import { fetchNoticeList } from "../../../api/notice/noticeApi";

const NoticesList = () => {
  const [noticeList, setNoticeList] = useState<TNotice[]>([]);
  const [category, setCategory] = useState<NOTICE_CATEGORY_KEYS>("ALL");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>();

  const navigate = useNavigate();

  const changePageHandler = (page: number) => {
    setPage(page);
  };

  const getNoticeList = async (category: NOTICE_CATEGORY_KEYS) => {
    try {
      setIsLoading(true);
      const resData = await fetchNoticeList(category);
      setNoticeList(resData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getNoticeList(category);
  }, [category]);

  const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as NOTICE_CATEGORY_KEYS);
    navigate(`/notice/?category=${e.target.value}`);
  };

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <HeaderStyle>
          <TitleStyle>📢공지사항</TitleStyle>
          <CategoryListStyle onChange={changeCategoryHandler}>
            <option value="ALL">전체</option>
            {NOTICE_CATEGORIES.map((item, index) => (
              <option key={index} id={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </CategoryListStyle>
        </HeaderStyle>
        <NoticeItem notice={noticeList} isLoading={isLoading} />
        <Paging
          page={page}
          changePageHandler={changePageHandler}
          count={5}
          pageSize={10}
        />
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default NoticesList;

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

const HeaderStyle = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: 3rem;
  border-bottom: 2px solid black;
`;

const TitleStyle = styled.h1`
  font-size: 2rem;
  flex: 1;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.5rem;
  }
`;

const CategoryListStyle = styled.select`
  width: 5rem;
  height: 2rem;
  display: flex;
  color: black;
`;
