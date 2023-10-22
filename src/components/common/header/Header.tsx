import {
  ContainerStyle,
  InnerContainerStyle,
  LogoBoxStyle,
  MenuBoxStyle,
  MenuInnerBoxStyle,
  MenuListStyle,
  LoginBoxStyle,
  LogoutBoxStyle,
} from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { getAuthUser, logout } from "../../../util";

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
    <ContainerStyle>
      <InnerContainerStyle>
        <LogoBoxStyle>
          <Link to="/">자연치유 쉼</Link>
        </LogoBoxStyle>
        <MenuBoxStyle>
          <MenuInnerBoxStyle>
            <MenuListStyle>
              {MENU_LIST.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.key}`}>{item.value}</Link>
                </li>
              ))}
            </MenuListStyle>
          </MenuInnerBoxStyle>
        </MenuBoxStyle>
        <LoginBoxStyle>
          {!getAuth && <Link to="/login">로그인</Link>}
          {getAuth && (
            <LogoutBoxStyle>
              <button>내정보</button>
              <button onClick={logoutHandler}>로그아웃</button>
            </LogoutBoxStyle>
          )}
        </LoginBoxStyle>
      </InnerContainerStyle>
    </ContainerStyle>
  );
};

export default Header;
