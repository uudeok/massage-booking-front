import styled from "styled-components";

const InformationContainerStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: pink;
`;

const Information = () => {
  return (
    <InformationContainerStyle>
      <div>Information 구역</div>
    </InformationContainerStyle>
  );
};

export default Information;
