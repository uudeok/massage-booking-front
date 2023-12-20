import styled from "styled-components";
import LoadingBar from "../loading/LoadingBar";
import BookingMassageItem from "./BookingMassageItem";
import Mapping from "../common/UI/map/Mapping";
import { useGetMassageListQuery } from "../../api/massage/massageQuery";
import { TMassageTable } from "../../@types/massage";
import Card from "../common/card/Card";

const BookingMassageList = () => {
  const { data: massageList } = useGetMassageListQuery();

  if (!massageList) return <LoadingBar />;

  const renderBookingItem = (massage: TMassageTable) => (
    <Card key={massage.id}>
      <BookingMassageItem massage={massage} />
    </Card>
  );

  return (
    <ContentBoxStyle>
      <ListBoxStyle>
        <Mapping data={massageList} renderItem={renderBookingItem} />
      </ListBoxStyle>
    </ContentBoxStyle>
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
