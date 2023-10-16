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
  padding: 1rem;
  width: 10rem;
  cursor: pointer;
  color: black;
  border: none;

  &:hover {
    color: #97a393;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 7rem;
  }
`;
