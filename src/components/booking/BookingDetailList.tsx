import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";
import { getMassageId } from "../../stores/massageSlice";
import ErrorPage from "../common/error/ErrorPage";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import LoadingBar from "../common/loading/LoadingBar";

const BookingDetailList = () => {
  const massageId = useSelector(getMassageId);
  const {
    data: selectedMassage,
    isFetching,
    isError,
  } = useGetMassageItemQuery(massageId);

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        {isFetching && <LoadingBar />}
        <PreviousButton />
        {isError && <ErrorPage errorStatus={null} />}
        {selectedMassage &&
          selectedMassage.detail.map((detail) => (
            <BookingDetail
              key={detail.id}
              detail={detail}
              massage={selectedMassage}
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
