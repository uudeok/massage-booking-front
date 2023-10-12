import styled from "styled-components";

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
  border: 1px dotted black;
  background-color: white;
  padding: 1rem;
  width: 10rem;
  cursor: pointer;

  &:hover {
    color: #97a393;
  }
`;
