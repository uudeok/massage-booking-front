import styled from "styled-components";
import theme from "../../styles/theme";
import CommonButton from "../common/button/CommonButton";

const ContactUsForm = () => {
  return (
    <Self>
      <p>찾으시는 내용이 없다면 문의하기를 이용해주세요</p>
      <CommonButton
        width="11rem"
        $padding="0.8rem"
        $backgroundColor={`${theme.palette.greenDk}`}
        color="white"
        $border="none"
        fontSize="14px"
      >
        문의하기
      </CommonButton>
    </Self>
  );
};

export default ContactUsForm;

const Self = styled.div`
  background-color: #f6f7f8;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.pretend};
  font-size: 22px;
  color: ${theme.palette.greenDk};
  font-weight: bold;
  gap: 2rem;
`;
