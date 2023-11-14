import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

const AlertPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertBoxStyle>
      <AlertMessageStyle>{children}</AlertMessageStyle>
    </AlertBoxStyle>
  );
};

export default AlertPage;

const AlertBoxStyle = styled.div`
  margin-top: 1rem;
`;

const AlertMessageStyle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  color: tomato;
  line-height: 1.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1rem;
  }
`;
