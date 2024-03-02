import { useEffect, useCallback } from "react";
import LoadingBar from "../loading/LoadingBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetTokenMutation } from "../../api/auth/authQuery";

//  여기서 카카오로부터 받은 인가 코드를 백엔드로 전달하고
// 백엔드로부터 받은 토큰을 로컬스토리지에 저장하고 로그인 정보를 얻는다.

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [getToken] = useGetTokenMutation();

  const getTokenHandler = useCallback(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const userInfo = await getToken(code!).unwrap();

    localStorage.setItem("nickname", userInfo.nickname);
    localStorage.setItem("user", JSON.stringify(userInfo));

    navigate("/");
  }, [getToken, navigate]);

  useEffect(() => {
    getTokenHandler();
  }, [getTokenHandler]);

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
