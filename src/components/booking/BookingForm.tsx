import styled from "styled-components";

const BookingForm = () => {
  return (
    <>
      <ButtonBoxStyle>
        <ButtonStyle>기존 회원 로그인</ButtonStyle>
        <ButtonStyle>비회원예약</ButtonStyle>
      </ButtonBoxStyle>
      <FormBoxStyle>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          required
          id="email"
          name="email"
        />
        <label htmlFor="비밀번호">비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          id="password"
          name="password"
        />
      </FormBoxStyle>
    </>
  );
};

export default BookingForm;

const ButtonBoxStyle = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonStyle = styled.button`
  border: none;
  background-color: whitesmoke;
  width: 9rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 15px;
  cursor: pointer;
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
