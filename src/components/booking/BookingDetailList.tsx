import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMassageItem } from "../../stores/massageSlice";
import { useGetMassageItemQuery } from "../../api/massage/massageQuery";
import { TMassageDetail } from "../../@types/massage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { subTabNum } from "../../stores/tabSlice";
import theme from "../../styles/theme";
import ErrorDisplay from "../common/error/ErrorDisplay";
import LoadingBar from "../common/loading/LoadingBar";
import styled from "styled-components";
import Card from "../common/card/Card";
import CommonButton from "../common/button/CommonButton";
import RenderList from "../common/map/DynamicRender";
import BookingDetail from "./BookingDetail";

const BookingDetailList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const massageItem = useSelector(getMassageItem);

  const { data: selectedMassage } = useGetMassageItemQuery(massageItem);

  if (!selectedMassage) return <LoadingBar />;

  if (selectedMassage === null) {
    return <ErrorDisplay errorMessage="일시적인 오류가 발생했습니다" />;
  }

  const renderDetailItem = (detail: TMassageDetail) => (
    <Card key={detail.time}>
      <BookingDetail detail={detail} massage={selectedMassage} />
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
          <RenderList
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
  font-family: ${theme.fonts.pretend};
`;

const ButtonBoxStyle = styled.div`
  margin-left: 2rem;
  width: 1100px;
  margin: auto;
`;
