import LoadingBar from "../common/loading/LoadingBar";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NaverCallback = () => {
  const navigate = useNavigate();

  const getToken = useCallback(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("naver", code);
    localStorage.setItem("access_token", code!);

    if (code) {
      navigate("/");
    }

    // code 가 네이버에서 받은 인가 코드이다. 이 코드를 백엔드로 전달하면 된다.
    // 그럼 백엔드에서 Resource server(네이버) 로 인가코드, secret key, client id 를 담아 보내면
    // access_token 받을 수 있다 그럼 access_token 으로 유저 정보를 조회할 수 있음
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

export default NaverCallback;

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
