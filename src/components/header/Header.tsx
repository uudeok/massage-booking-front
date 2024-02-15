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
import { useCookies } from "react-cookie";
import HeaderDropMenu from "./HeaderDropMenu";
import RenderList from "../common/map/RenderList";

type MenuType = {
  key: string;
  value: string;
};

export const MENU_LIST = [
  { key: "program", value: "프로그램 안내" },
  { key: "information", value: "회원권 안내" },
  { key: "notice", value: "공지사항" },
] as MenuType[];

const Header = () => {
  const navigate = useNavigate();
  const [loginCookie, , removeCookie] = useCookies(["userId"]);

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  const logout = () => {
    removeCookie("userId");
  };

  const renderMenuItem = (item: MenuType) => (
    <li key={item.key}>
      <Link to={`/${item.key}`}>{item.value}</Link>
    </li>
  );

  return (
    <>
      <HeaderDropMenu />
      <ContainerStyle>
        <InnerContainerStyle>
          <LogoBoxStyle>
            <Link to="/">
              <LogoStyle>자연치유 쉼</LogoStyle>
            </Link>
          </LogoBoxStyle>
          <MenuBoxStyle>
            <MenuListStyle>
              <RenderList data={MENU_LIST} renderItem={renderMenuItem} />
            </MenuListStyle>
          </MenuBoxStyle>

          <LoginBoxStyle>
            {!loginCookie.userId && <Link to="/login">로그인</Link>}
            {loginCookie.userId && (
              <LogoutBoxStyle>
                <button onClick={() => navigate("/mypage/order")}>
                  내정보
                </button>
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
