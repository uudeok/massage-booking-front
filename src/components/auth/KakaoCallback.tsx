import { useEffect, useCallback } from "react";
import LoadingBar from "../loading/LoadingBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//  여기서 카카오로부터 받은 인가 코드를 백엔드로 전달하고
// 백엔드로부터 받은 토큰을 로컬스토리지에 저장하고 로그인 정보를 얻는다.

const KakaoCallback = () => {
  const navigate = useNavigate();
  console.log("hsdas");

  const getToken = useCallback(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    // console.log("kakaoCode", code);
    localStorage.setItem("code", code!);

    if (code) {
      navigate("/");
    }

    // code 가 카카오에서 받은 인가 코드이다. 이 코드를 백엔드로 전달하면 된다.
  }, [navigate]);

  const userAccessToken = useCallback(() => {
    window.location.href.includes("code") && getToken();
  }, [getToken]);

  useEffect(() => {
    userAccessToken();
  }, [userAccessToken]);

  return (
    <BackGroundStyle>
      <LayoutStyle>
        <LoadingBar />
      </LayoutStyle>
    </BackGroundStyle>
  );
};

export default KakaoCallback;

const BackGroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0.8;
  display: flex;
  justify-content: center;
`;

const LayoutStyle = styled.div`
  display: flex;
  align-items: center;
`;
