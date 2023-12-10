import styled from "styled-components";

const ErrorPage = ({ errorStatus }: { errorStatus: number | null }) => {
  if (errorStatus === 404) {
    return <ImgStyle src="404.png" alt="error" />;
  }

  return (
    <ContentStyle>
      <span>일시적인 오류 입니다.</span>
    </ContentStyle>
  );
};

export default ErrorPage;

const ImgStyle = styled.img`
  width: 60%;
  margin: auto;
`;

const ContentStyle = styled.div`
  font-family: "GmarketSansMedium";
  color: orangered;
  padding: 3rem;
  display: flex;
  justify-content: center;
`;
