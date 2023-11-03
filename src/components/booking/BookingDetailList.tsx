import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";
import {
  getMassageItem,
  massageError,
  massageStatus,
} from "../../stores/massageSlice";
import { TMassageDetail, TMassageTable } from "../../@types/book";
import LoadingBar from "../common/loading/LoadingBar";
import ErrorPage from "../common/error/ErrorPage";

const BookingDetailList = () => {
  const selectedMassage = useSelector(getMassageItem) as TMassageTable;
  const massageDetail = selectedMassage.detail as TMassageDetail[];
  const status = useSelector(massageStatus);
  const errorStatus = useSelector(massageError);
  const isLoading = status === "loading";

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        {isLoading && <LoadingBar />}
        {errorStatus && <ErrorPage errorStatus={errorStatus} />}
        {massageDetail &&
          massageDetail.map((detail) => (
            <BookingDetail key={detail.id} detail={detail} />
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
