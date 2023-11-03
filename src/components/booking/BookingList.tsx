import BookingItem from "./BookingItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import LoadingBar from "../common/loading/LoadingBar";
import { useEffect } from "react";
import {
  massageError,
  fetchMassageList,
  getMassageList,
  massageStatus,
} from "../../stores/massageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { TMassageTable } from "../../@types/book";
import ErrorPage from "../common/error/ErrorPage";

const BookingList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const massageList = useSelector(getMassageList) as TMassageTable[];
  const status = useSelector(massageStatus);
  const errorStatus = useSelector(massageError);
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(fetchMassageList());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingBar />}
      {errorStatus && <ErrorPage errorStatus={errorStatus} />}
      <ContentBoxStyle>
        <ListBoxStyle>
          {massageList &&
            massageList.map((massage) => (
              <BookingItemStyle key={massage.id}>
                <BookingItem massage={massage} />
              </BookingItemStyle>
            ))}
        </ListBoxStyle>
      </ContentBoxStyle>
    </>
  );
};

export default BookingList;

const ContentBoxStyle = styled.div`
  display: flex;
`;

const ListBoxStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;
  font-family: "Pretendard-Regular";
`;

const BookingItemStyle = styled.li`
  width: 500px;
  height: 500px;
  padding: 1rem;
  margin: 40px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 10px;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 360px;
    height: 450px;
    margin: 10px;
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    width: 335px;
    height: 450px;
    margin: 15px;
    margin-top: 3rem;
  }
`;
