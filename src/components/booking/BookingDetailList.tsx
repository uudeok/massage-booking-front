import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";
import { getMassageItem } from "../../stores/massageSlice";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import LoadingBar from "../loading/LoadingBar";

const BookingDetailList = () => {
  const massageItem = useSelector(getMassageItem);
  const { data: selectedMassage } = useGetMassageItemQuery(massageItem);

  if (!selectedMassage) return <LoadingBar />;

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        {selectedMassage.detail.map((detail) => (
          <BookingDetail
            key={detail.time}
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
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const InnerBoxStyle = styled.div`
  margin: 0 auto;
`;
