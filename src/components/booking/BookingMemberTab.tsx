import styled from "styled-components";
import { useState } from "react";

const BookingMemberTab = () => {
  const [userTabNum, setUserTabNum] = useState(0);

  const USER_TAB = [
    { key: "기존 회원", content: "로그인 화면" },
    { key: "비회원예약", content: "비회원 인증화면" },
  ];

  return (
    <>
      <ButtonBoxStyle>
        {USER_TAB.map((item, index) => (
          <ButtonStyle
            key={index}
            onClick={() => setUserTabNum(index)}
            $isClicked={index === userTabNum}
          >
            {item.key}
          </ButtonStyle>
        ))}
      </ButtonBoxStyle>
      <FormBoxStyle>{USER_TAB[userTabNum].content}</FormBoxStyle>
    </>
  );
};

export default BookingMemberTab;

const ButtonBoxStyle = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonStyle = styled.button<{ $isClicked: boolean }>`
  border: none;
  background-color: whitesmoke;
  width: 9rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 15px;
  cursor: pointer;

  background-color: ${({ $isClicked }) =>
    $isClicked ? "#9ac488" : "whitesmoke"};

  color: ${({ $isClicked }) => ($isClicked ? "white" : "black")};
`;

const FormBoxStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  label {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
