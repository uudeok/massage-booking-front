import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

interface IProps {
  changeTabHandler: (number: number) => void;
  tabNum: number;
}

const PreviousButton = ({ changeTabHandler, tabNum }: IProps) => {
  return (
    <ButtonStyle onClick={() => changeTabHandler(tabNum)}>
      이전단계로
    </ButtonStyle>
  );
};

export default PreviousButton;

const ButtonStyle = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  width: 10rem;
  cursor: pointer;
  color: black;
  padding: 1rem;
  font-family: "Pretendard-Regular";
  font-size: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 7rem;
    padding: 0.5rem;
  }
`;
