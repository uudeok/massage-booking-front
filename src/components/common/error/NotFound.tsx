import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import { FcCancel } from "react-icons/fc";

type TError = {
  status: number;
  data: {
    error: string;
  };
};

const NotFound = () => {
  const error = useRouteError() as TError;
  console.log("not", error);

  return (
    <ErrorScreen>
      <IconStyle>
        <FcCancel />
      </IconStyle>
      <MessageStyle>존재하지 않는 페이지입니다.</MessageStyle>
      <Link to="/">
        <ButtonStyle>홈으로</ButtonStyle>
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
  font-family: "Pretendard-Regular";
  gap: 1rem;
`;

const IconStyle = styled.div`
  font-size: 10rem;
`;

const MessageStyle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

const ButtonStyle = styled.button`
  background-color: #002ead;
  color: white;
  padding: 1rem;
  width: 6rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Pretendard-Regular";
`;
