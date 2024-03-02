import LoadingBar from "../loading/LoadingBar";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NaverCallback = () => {
  const navigate = useNavigate();

  const getToken = useCallback(async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    // console.log("naver", code);

    localStorage.setItem("code", code!);

    if (code) {
      navigate("/");
    }
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
