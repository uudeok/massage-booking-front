import styled from "styled-components";

const LoadingBar = () => {
  return (
    <LoadingBarStyle>
      <span></span>
      <span></span>
      <span></span>
    </LoadingBarStyle>
  );
};

export default LoadingBar;

const LoadingBarStyle = styled.div`
  text-align: center;
  h1 {
    font-family: "GmarketSansMedium";
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: gray;
    border-radius: 50%;
    animation: loading 1s 0s linear infinite;
  }

  span:nth-child(1) {
    animation-delay: 0s;
    background-color: red;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
    background-color: orange;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
    background-color: yellowgreen;
  }

  @keyframes loading {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;
