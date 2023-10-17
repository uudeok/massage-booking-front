import styled from "styled-components";
import { NOTICE_LIST, NOTICE_CATEGORIES } from "../../../const/notices";
import NoticeItem from "./NoticeItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoticesList = () => {
  const [category, setCategory] = useState("ALL");
  const navigate = useNavigate();

  let filteredList;

  if (category === "ALL") {
    filteredList = NOTICE_LIST;
  } else {
    filteredList = NOTICE_LIST.filter((item) => item.category === category);
  }

  const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    navigate(`/notice/?category=${e.target.value}`);
  };

  useEffect(() => {
    /// category 가 바뀔때마다 API 요청
    /// category?=${category}
  }, [category]);

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <HeaderStyle>
          <TitleStyle>공지사항</TitleStyle>
          <CategoryListStyle onChange={changeCategoryHandler}>
            <option value="ALL">전체</option>
            {NOTICE_LIST.map((item) => (
              <option key={item.id} id={item.category} value={item.category}>
                {NOTICE_CATEGORIES[item.category]}
              </option>
            ))}
          </CategoryListStyle>
        </HeaderStyle>
        <NoticeItem notice={filteredList} />
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
`;

const CategoryListStyle = styled.select`
  width: 5rem;
  height: 2rem;
  display: flex;
`;
