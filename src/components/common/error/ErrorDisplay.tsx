import styled from "styled-components";

type TProps = {
  errorMessage: string | undefined;
};

const ErrorDisplay = ({ errorMessage }: TProps) => {
  return (
    <>{errorMessage && <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>}</>
  );
};

export default ErrorDisplay;

const ErrorMessageStyle = styled.span`
  text-align: center;
  padding: 1rem;
  color: tomato;
`;
