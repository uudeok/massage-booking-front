import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";
import { IPreviousButton } from "../../@types/book";
import { filteredDetail } from "../../stores/bookSlice";

const BookingDetailList = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const massageDetail = useSelector(filteredDetail);

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton
          changeTabHandler={changeTabHandler}
          tabNum={tabNum - 1}
        />
        {massageDetail.map((detail) => (
          <BookingDetail
            key={detail.id}
            detail={detail}
            changeTabHandler={changeTabHandler}
            tabNum={tabNum}
          />
        ))}
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDetailList;

const ContainerStyle = styled.div`
  display: flex;
  width: 70%;
  margin: auto;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  padding: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;
