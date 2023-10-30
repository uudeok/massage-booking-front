import BookingItem from "./BookingItem";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useQuery } from "@tanstack/react-query";
import { fetchMassageList } from "../../api/book/bookApi";
import LoadingBar from "../common/loading/LoadingBar";

const BookingList = () => {
  const { isPending, data } = useQuery({
    queryKey: ["massageList"],
    queryFn: fetchMassageList,
  });

  return (
    <>
      {isPending && <LoadingBar />}
      <ContentBoxStyle>
        <ListBoxStyle>
          {data &&
            data.map((massage) => (
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
