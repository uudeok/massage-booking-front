import styled from "styled-components";
import MassageSlide from "./MassageSlide";
import { MEDIA_QUERY } from "../../const/devise";

const Massage = () => {
  return (
    <>
      <HeaderStyle>Program</HeaderStyle>
      <MassageContainerStyle>
        <MassageInnerBoxStyle>
          <MassageSlide />
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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 2.5rem;
    margin: 1rem auto;
  }
`;

const MassageContainerStyle = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    height: 40vh;
  }
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  height: 40vh;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    height: 35vh;
  }
`;
