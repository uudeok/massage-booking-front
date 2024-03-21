import { FAQ_LIST } from "../../const/faq";
import { useState } from "react";
import { paginateFAQList } from "../../util/page";
import styled from "styled-components";
import Search from "./Search";
import FaqList from "./FaqList";
import theme from "../../styles/theme";
import Paging from "../pagination/Paging";
import ContactUs from "./ContactUs";

const PAGE_SIZE = 7;

const Faq = () => {
  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const list = paginateFAQList(FAQ_LIST, PAGE_SIZE, page);
  console.log(list);

  return (
    <>
      <HeaderStyle>자주하는 질문</HeaderStyle>
      <Search />
      <FaqList faqList={list} />
      <Paging
        count={FAQ_LIST.length}
        changePageHandler={handlePage}
        page={page}
        pageSize={PAGE_SIZE}
      />
      <ContactUs />
    </>
  );
};

export default Faq;

const HeaderStyle = styled.h2`
  font-size: 33px;
  text-align: center;
  padding: 1rem;
  margin: 4rem auto;
  font-family: ${theme.fonts.pretend};
`;
