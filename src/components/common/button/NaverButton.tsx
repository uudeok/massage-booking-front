import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
};

const NaverButton = ({ children }: TProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default NaverButton;

const ButtonStyle = styled.button`
  background: url("/naverIcon.png") no-repeat center;
  font-family: "Pretendard-Regular";
  background-position: 18px;
  background-size: 40px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  color: #fff;
  background-color: #03c75a;
  -webkit-box-shadow: 0 2px 4px 0 rgba(3, 199, 90, 0.12);
  box-shadow: var(--shadow-1);
`;
