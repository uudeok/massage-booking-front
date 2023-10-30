import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores/store";
import { subTabNum } from "../../../stores/tabSlice";

const PreviousButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ButtonStyle onClick={() => dispatch(subTabNum())}>이전단계로</ButtonStyle>
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

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 7rem;
    padding: 0.5rem;
  }
`;
