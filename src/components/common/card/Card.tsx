import styled from "styled-components";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <ItemBoxStyle>{children}</ItemBoxStyle>;
};

export default Card;

const ItemBoxStyle = styled.div`
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 1rem;
  min-height: 6rem;
  margin-bottom: 1rem;
  width: 100%;
  font-family: "Pretendard-Regular";
`;
