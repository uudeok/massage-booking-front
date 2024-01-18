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
import { getAuthUser, logout } from "../../util/auth";
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
  const getAuth = getAuthUser();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/");
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
            {!getAuth && <Link to="/login">로그인</Link>}
            {getAuth && (
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
