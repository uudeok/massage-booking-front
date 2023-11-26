import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores/store";
import { subTabNum } from "../../../stores/tabSlice";

const PreviousButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ButtonStyle onClick={() => dispatch(subTabNum())}>뒤로가기</ButtonStyle>
  );
};

export default PreviousButton;

const ButtonStyle = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  width: 10rem;
  cursor: pointer;
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  border: none;
  text-align: left;
`;
