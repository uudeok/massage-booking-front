import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";
import { massageItem } from "../../stores/massageSlice";

const BookingDetailList = () => {
  const selectedMassage = useSelector(massageItem);
  const massageDetail = selectedMassage[0].detail;

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        {massageDetail.map((detail) => (
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
