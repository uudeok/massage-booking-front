import {
  ContainerStyle,
  InnerContainerStyle,
  LogoBoxStyle,
  MenuBoxStyle,
  MenuListStyle,
  LoginBoxStyle,
  LogoutBoxStyle,
  LogoStyle,
} from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { getAuthUser, logout } from "../../util";

const MENU_LIST = [
  { key: "program", value: "프로그램 안내", id: 1 },
  { key: "information", value: "회원권 안내", id: 2 },
  { key: "notice", value: "공지사항", id: 3 },
];

const Header = () => {
  const getAuth = getAuthUser();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <ContainerStyle>
        <InnerContainerStyle>
          <LogoBoxStyle>
            {/* <img src="logo.png" alt="logo" width="40px" /> */}
            <Link to="/">
              <LogoStyle>자연치유 쉼</LogoStyle>
            </Link>
          </LogoBoxStyle>
          <MenuBoxStyle>
            <MenuListStyle>
              {MENU_LIST.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.key}`}>{item.value}</Link>
                </li>
              ))}
            </MenuListStyle>
          </MenuBoxStyle>
          <LoginBoxStyle>
            {!getAuth && <Link to="/login">로그인</Link>}
            {getAuth && (
              <LogoutBoxStyle>
                <button onClick={() => navigate("/mypage/book")}>내정보</button>
                <button onClick={logoutHandler}>로그아웃</button>
              </LogoutBoxStyle>
            )}
          </LoginBoxStyle>
        </InnerContainerStyle>
      </ContainerStyle>
    </>
  );
};

export default Header;
