import styled from "styled-components";
import Search from "./Search";
import FaqList from "./FaqList";
import theme from "../../styles/theme";
import Paging from "../pagination/Paging";
import { FAQ_LIST } from "../../const/faq";
import { useState } from "react";

const Faq = () => {
  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    setPage(page);
  };

  /// FAQ_LIST 를 API 통해 받아와서 갯수만큼 FaqList 에 전달해주면됨

  return (
    <>
      <HeaderStyle>자주하는 질문</HeaderStyle>
      <Search />
      <FaqList />
      <Paging
        count={FAQ_LIST.length}
        changePageHandler={handlePage}
        page={page}
        pageSize={7}
      />
    </>
  );
};

export default Faq;

const HeaderStyle = styled.h2`
  font-size: 33px;
  text-align: center;
  padding: 1rem;
  margin: 3rem auto;
  font-family: ${theme.fonts.pretend};
`;
