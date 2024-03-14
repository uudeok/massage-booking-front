import { useGetMassageListQuery } from "../../api/massage/massageQuery";
import styled from "styled-components";
import MassageSlide from "./MassageSlide";
import LoadingBar from "../common/loading/LoadingBar";
import theme from "../../styles/theme";

const Massage = () => {
  const { data: massageList = [] } = useGetMassageListQuery();

  if (!massageList) {
    return <LoadingBar />;
  }

  return (
    <>
      <HeaderStyle>Program</HeaderStyle>
      <MassageContainerStyle>
        <MassageInnerBoxStyle>
          <MassageSlide massageList={massageList} />
        </MassageInnerBoxStyle>
      </MassageContainerStyle>
    </>
  );
};

export default Massage;

const HeaderStyle = styled.h2`
  text-align: center;
  padding: 1rem;
  font-size: 3rem;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  margin: 1rem auto;

  width: 75%;
  font-weight: bold;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 2.5rem;
    margin: 1rem auto;
  }
`;

const MassageContainerStyle = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    height: 40vh;
  }

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    height: 35vh;
  }

  @media only screen and (max-width: ${theme.devise.mobileWidth}) {
    height: 30vh;
  }
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;
