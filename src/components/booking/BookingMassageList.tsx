import styled from "styled-components";
import BookingMassageItem from "./BookingMassageItem";
import RenderList from "../common/UI/map/RenderList";
import { useGetMassageListQuery } from "../../api/massage/massageQuery";
import { TMassageTable } from "../../@types/massage";
import Card from "../common/card/Card";
import FetchWithLoading from "../loading/FetchWithLoading";

const BookingMassageList = () => {
  const { data: massageList = [], isLoading } = useGetMassageListQuery();

  const renderBookingItem = (massage: TMassageTable) => (
    <Card key={massage.id}>
      <BookingMassageItem massage={massage} />
    </Card>
  );

  return (
    <>
      <FetchWithLoading isLoading={isLoading} />
      <ContentBoxStyle>
        <ListBoxStyle>
          <RenderList data={massageList} renderItem={renderBookingItem} />
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
