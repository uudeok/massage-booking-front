import styled from "styled-components";

const MembershipList = () => {
  return (
    <>
      <ContainerStyle>
        <BannerBoxStyle>
          <BannerTitleStyle>자연치유 쉼 멤버쉽 할인</BannerTitleStyle>
          <span>자연치유 쉼의 회원권으로</span>
          <span>합리적인 가격으로 마사지를 받아보세요.</span>
        </BannerBoxStyle>
      </ContainerStyle>
    </>
  );
};

export default MembershipList;

const ContainerStyle = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url("a.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  margin-top: 1rem;
`;

const BannerBoxStyle = styled.div`
  /* border: 1px solid whitesmoke; */
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
  color: white;
  width: 25rem;
  position: relative;
  left: 60%;
  top: 8rem;
  padding: 1rem;
  font-size: 1.2rem;

  span {
    padding: 0.3rem;
  }
`;

const BannerTitleStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
