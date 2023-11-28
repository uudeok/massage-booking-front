import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
};

const KakaoButton = ({ children }: TProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default KakaoButton;

const ButtonStyle = styled.button`
  font-family: "Pretendard-Regular";
  background-color: #fee500;
  background-image: url(//storage.keepgrow.com/admin/campaign/20200611043456590.svg);
  background-repeat: no-repeat;
  background-position: 28px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  color: black;
  box-shadow: var(--shadow-1);
  -webkit-box-shadow: 0 2px 4px 0 #fee500;
  /* margin-bottom: 1rem; */
`;
