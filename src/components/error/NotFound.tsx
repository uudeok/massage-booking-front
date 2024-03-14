import { useRouteError, Link } from "react-router-dom";

import styled from "styled-components";
import theme from "../../styles/theme";
import CommonButton from "../common/button/CommonButton";

type TError = {
  status: number;
  data: {
    error: string;
  };
};

const NotFound = () => {
  const error = useRouteError() as TError;
  console.log("Not Found", error);

  return (
    <ErrorScreen>
      <MessageStyle>존재하지 않는 페이지입니다</MessageStyle>
      <Link to="/">
        <CommonButton
          type="round"
          width="15rem"
          $padding="1rem"
          fontSize="1rem"
          $border="1px solid grey"
        >
          홈으로
        </CommonButton>
      </Link>
    </ErrorScreen>
  );
};

export default NotFound;

const ErrorScreen = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  font-family: ${theme.fonts.pretend};
  gap: 2rem;
  margin: 5rem auto;
`;

const MessageStyle = styled.h2`
  font-weight: bold;
  font-size: 3rem;
`;
