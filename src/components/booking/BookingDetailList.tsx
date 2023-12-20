import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { getMassageItem } from "../../stores/massageSlice";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import LoadingBar from "../loading/LoadingBar";
import Mapping from "../common/UI/map/Mapping";
import BookingDetail from "./BookingDetail";
import { TMassageDetail } from "../../@types/massage";
import Card from "../common/card/Card";

const BookingDetailList = () => {
  const massageItem = useSelector(getMassageItem);
  const { data: selectedMassage } = useGetMassageItemQuery(massageItem);

  if (!selectedMassage) return <LoadingBar />;

  const renderDetailItem = (detail: TMassageDetail) => (
    <Card key={detail.time}>
      <BookingDetail detail={detail} massage={selectedMassage} />
    </Card>
  );

  return (
    <>
      <ButtonBoxStyle>
        <PreviousButton />
      </ButtonBoxStyle>
      <ContentBoxStyle>
        <ListBoxStyle>
          <Mapping
            data={selectedMassage.detail}
            renderItem={renderDetailItem}
          />
        </ListBoxStyle>
      </ContentBoxStyle>
    </>
  );
};

export default BookingDetailList;

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

const ButtonBoxStyle = styled.div`
  margin-left: 2rem;
  width: 1100px;
  margin: auto;
`;
