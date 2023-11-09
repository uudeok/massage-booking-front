import BookingMassageItem from "./BookingMassageItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import LoadingBar from "../common/loading/LoadingBar";
import ErrorPage from "../common/error/ErrorPage";
import { useGetMassageListQuery } from "../../api/massage/massageQuery";

const BookingMassageList = () => {
  const { data: massageList, isFetching, isError } = useGetMassageListQuery();

  return (
    <>
      {isFetching && <LoadingBar />}
      {isError && <ErrorPage errorStatus={null} />}
      <ContentBoxStyle>
        <ListBoxStyle>
          {massageList &&
            massageList.map((massage) => (
              <BookingItemStyle key={massage.id}>
                <BookingMassageItem massage={massage} />
              </BookingItemStyle>
            ))}
        </ListBoxStyle>
      </ContentBoxStyle>
    </>
  );
};

export default BookingMassageList;

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