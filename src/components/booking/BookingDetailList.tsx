import { ITabHandler } from "../../@types/book";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMassageTimeList } from "../../stores/massageSlice";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingDetail from "./BookingDetail";
import { DEVISE_SIZE } from "../../const/devise";

const BookingDetailList = ({ changeTabHandler }: ITabHandler) => {
  const massageTime = useSelector(getMassageTimeList);

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton changeTabHandler={changeTabHandler} tabNum={0} />
        {massageTime.map((detail) => (
          <BookingDetail
            key={detail.id}
            detail={detail}
            changeTabHandler={changeTabHandler}
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
