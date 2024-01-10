import styled from "styled-components";
import theme from "../../styles/theme";

const DayOfWeek = () => {
  return (
    <thead>
      <HeaderRow>
        <th>일</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
        <th>토</th>
      </HeaderRow>
    </thead>
  );
};

export default DayOfWeek;

const HeaderRow = styled.tr`
  th {
    width: 47.86px;
    height: 40px;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${theme.fonts.pretend};
  }
`;
