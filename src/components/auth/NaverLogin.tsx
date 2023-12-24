import { Link } from "react-router-dom";
import CommonButton from "../common/button/CommonButton";

const NaverLogin = () => {
  const STATE = "test";
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = "http://localhost:3000/naverCallback";
  const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_url=${NAVER_CALLBACK_URL}`;

  return (
    <>
      <Link to={NAVER_URL}>
        <CommonButton oauth="naver">네이버 아이디 로그인</CommonButton>
      </Link>
    </>
  );
};

export default NaverLogin;
