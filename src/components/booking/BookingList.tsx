import BookingItem from "./BookingItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import LoadingBar from "../common/loading/LoadingBar";
import { useMassageList } from "../../hooks/useMassageList";

const BookingList = () => {
  const { data: massageList, isLoading, error } = useMassageList();

  // 마사지 리스트는 거의 변하지 않는 데이터이므로
  // staleTime, gcTime 을 무한으로 설정
  // 새로고침시에만 API 요청

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  return (
    <>
      {isLoading && <LoadingBar />}

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
