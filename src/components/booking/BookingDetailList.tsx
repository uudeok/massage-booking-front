import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import { getMassageItem } from "../../stores/massageSlice";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import RenderList from "../common/map/RenderList";
import BookingDetail from "./BookingDetail";
import { TMassageDetail, TMassageTable } from "../../@types/massage";
import Card from "../common/card/Card";
import CommonButton from "../common/button/CommonButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { subTabNum } from "../../stores/tabSlice";
import FetchWithLoading from "../loading/FetchWithLoading";
import { useEffect, useState } from "react";
import theme from "../../styles/theme";

const BookingDetailList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const massageItem = useSelector(getMassageItem);
  const [detail, setDetail] = useState<TMassageDetail[]>([]);

  const { data: selectedMassage, isLoading } =
    useGetMassageItemQuery(massageItem);

  useEffect(() => {
    if (selectedMassage !== undefined) {
      setDetail(selectedMassage.detail);
    }
  }, [selectedMassage]);

  const renderDetailItem = (detail: TMassageDetail) => (
    <Card key={detail.time}>
      <BookingDetail
        detail={detail}
        massage={selectedMassage as TMassageTable}
      />
    </Card>
  );

  return (
    <>
      <ButtonBoxStyle>
        <CommonButton type="plain" onClickButton={() => dispatch(subTabNum())}>
          뒤로가기
        </CommonButton>
      </ButtonBoxStyle>
      <ContentBoxStyle>
        <ListBoxStyle>
          <FetchWithLoading isLoading={isLoading}>
            <RenderList data={detail} renderItem={renderDetailItem} />
          </FetchWithLoading>
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
  font-family: ${theme.fonts.pretend};
`;

const ButtonBoxStyle = styled.div`
  margin-left: 2rem;
  width: 1100px;
  margin: auto;
`;
