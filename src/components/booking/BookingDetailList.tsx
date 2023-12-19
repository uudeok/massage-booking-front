import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { getMassageItem } from "../../stores/massageSlice";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import LoadingBar from "../loading/LoadingBar";
import { MEDIA_QUERY } from "../../const/devise";
import Mapping from "../common/Mapping";
import BookingDetail from "./BookingDetail";

const BookingDetailList = () => {
  const massageItem = useSelector(getMassageItem);
  const { data: selectedMassage } = useGetMassageItemQuery(massageItem);

  if (!selectedMassage) return <LoadingBar />;

  const renderDetailItem = (detail: any) => (
    <ItemStyle key={detail.time}>
      <BookingDetail detail={detail} massage={selectedMassage} />
    </ItemStyle>
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

const ItemStyle = styled.li`
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
