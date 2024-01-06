import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TProps) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;
