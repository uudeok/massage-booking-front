import styled from "styled-components";

export const HeaderContainerStyle = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
  min-height: 100px;
  display: flex;
`;

export const HeaderInnerContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: end;
`;

export const HeaderLogoBoxStyle = styled.div`
  width: 20%;
`;

export const HeaderMenuBoxStyle = styled.div`
  width: 60%;
`;

export const HeaderMenuInnerBoxStyle = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

export const HeaderMenuListStyle = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const HeaderLoginBoxStyle = styled.div`
  width: 20%;
  text-align: right;
`;
