import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  changeTabHandler: (number: number) => void;
  tabNum: number;
}

const PreviousButton = ({ children, changeTabHandler, tabNum }: IProps) => {
  return (
    <ButtonStyle onClick={() => changeTabHandler(tabNum)}>
      {children}
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
    color: white;
    background-color: #2cc185;
  }
`;
