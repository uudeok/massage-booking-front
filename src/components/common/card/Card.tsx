import styled from "styled-components";
import theme from "../../../styles/theme";

type TProps = {
  children: React.ReactNode;
};

const Card = ({ children }: TProps) => {
  return <CardLayoutStyle>{children}</CardLayoutStyle>;
};

export default Card;

const CardLayoutStyle = styled.li`
  width: 500px;
  height: 500px;
  padding: 1rem;
  margin: 40px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 10px;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 360px;
    height: 450px;
    margin: 10px;
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${theme.devise.mobileWidth}) {
    width: 335px;
    height: 450px;
    margin: 15px;
    margin-top: 3rem;
  }
`;
