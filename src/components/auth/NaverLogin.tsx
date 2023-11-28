import React, { useEffect, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import NaverButton from "../common/button/NaverButton";

const NaverLogin = ({ setGetToken, setUserInfo }: any) => {
  const navigate = useNavigate();
  //   const naverRef = useRef<any>();
  //   const { naver } = window as any;
  const STATE = "test";
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = "http://localhost:3000/naverCallback";
  const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_url=${NAVER_CALLBACK_URL}`;

  // 네이버 로그인과 정보 제공 동의 과정이 완료 되면 콜백 url 에 code 값과 state 값이
  // url 문자열로 전송된다. 이때 code 값은 접근 토큰 발급 요청에 사용한다.
  // 접근 토큰은 사용자가 인증을 완료했다는 것을 보장할 수 있는 인증 정보이다.
  // 콜백으로 전달 받은 code 값을 이용해 접근토큰발급 API 를 호출하게 되면
  // 응답으로 접근토큰에 대한 정보를 받을 수 있다.

  // 콜백으로 전달 받은 code 값을 우리 서버로 '접근토큰발급API' 를 호출하게 되면
  // 사용자 정보를 받을 수 있는데, 이를 윈도우 객체에 있는
  //  네이버의 LoginWithNaverId 함수를 이용하면,
  //  위 과정을 생략하고 바로 토큰 값을 전달 받을 수 있다.

  //   const initializeNaverLogin = useCallback(() => {
  //     const naverLogin = new naver.LoginWithNaverId({
  //       clientId: NAVER_CLIENT_ID,
  //       callbackUrl: NAVER_CALLBACK_URL,
  //       isPopup: false,
  //       loginButton: { color: "green", type: 3, height: 54 },
  //       callbackHandle: true,
  //     });
  //     naverLogin.init();

  // naverLogin 을 이용해 유저 정보를 불러오는데
  // 함수 내부에서 naverLogin 을 선언하였기 때문에 지역변수 처리가 되어
  // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행해야한다.

  // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는
  // 코드 생략이 가능하다.

  //     naverLogin.getLoginStatus((status: any) => {
  //       if (status) {
  //         const usreid = naverLogin.user.getEmail();
  //         const username = naverLogin.user.getName();
  //         const usergender = naverLogin.user.getGender();
  //         console.log("네이버", username, usergender, usreid);
  //       }
  //     });
  //     // 요기
  //   }, [NAVER_CALLBACK_URL, NAVER_CLIENT_ID, naver.LoginWithNaverId]);

  // naverLogin 을 통해 url 로 응답을 잘 받았다면 location 을 통해
  // access_token 값에 접근하여, 이 접근 토큰을 가지고 프로필 api 호출하기를 할 수 있다.

  //   const getToken = useCallback(() => {
  //     const token = window.location.href.split("=")[1].split("&")[0];
  //     localStorage.setItem("access_token", token);
  //     console.log("token", token);
  //     if (token) {
  //       navigate("/");
  //     }
  //   }, [navigate]);

  //   const userAccessToken = useCallback(() => {
  //     window.location.href.includes("access_token") && getToken();
  //   }, [getToken]);

  //   useEffect(() => {
  //     initializeNaverLogin();
  //     userAccessToken();
  //   }, [initializeNaverLogin, userAccessToken]);

  //   const handleClick = () => {
  //     naverRef.current.children[0].click();
  //   };

  return (
    <>
      {/* <NaverIdLogin id="naverIdLogin" ref={naverRef} /> */}
      <Link to={NAVER_URL}>
        <NaverButton>네이버 아이디 로그인</NaverButton>
      </Link>
    </>
  );
};

export default NaverLogin;

// const NaverIdLogin = styled.div`
//   display: none;
// `;

// const ButtonStyle = styled.button`
//   font-family: "Pretendard-Regular";
//   background: url("/naverIcon.png") no-repeat center;
//   background-position: 18px;
//   background-size: 40px;
//   padding: 1rem;
//   border: none;
//   border-radius: 10px;
//   text-align: center;
//   font-size: 1rem;
//   cursor: pointer;
//   width: 100%;
//   color: #fff;
//   background-color: #03c75a;
//   -webkit-box-shadow: 0 2px 4px 0 rgba(3, 199, 90, 0.12);
//   box-shadow: var(--shadow-1);
// `;
