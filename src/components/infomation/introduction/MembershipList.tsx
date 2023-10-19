import styled from "styled-components";

const MembershipList = () => {
  return (
    <>
      <ImgBoxStyle>
        <img src="/membership.jpg" alt="배너사진" width="100%" height="100%" />
        <BannerBoxStyle>
          <BannerTitleStyle>자연치유 쉼 멤버쉽 할인</BannerTitleStyle>
          <span>자연치유 쉼 회원권으로</span>
          <span>합리적인 가격으로 마사지를 받아보세요.</span>
        </BannerBoxStyle>
      </ImgBoxStyle>
    </>
  );
};

export default MembershipList;

const ImgBoxStyle = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 1rem;

  img {
    object-fit: cover;
    opacity: 0.8;
    filter: brightness(0.8);
    z-index: 0;
  }
`;

const BannerBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
  color: white;
  width: 25rem;
  position: relative;
  left: 60%;
  bottom: 21rem;
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
