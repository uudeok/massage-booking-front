import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
};

const NaverButton = ({ children }: TProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default NaverButton;

const ButtonStyle = styled.button`
  font-family: "Pretendard-Regular";
  display: block;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  background-color: #03c75a;
  -webkit-box-shadow: 0 2px 4px 0 rgba(3, 199, 90, 0.12);
  box-shadow: 0 2px 4px 0 rgba(3, 199, 90, 0.12);
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;
