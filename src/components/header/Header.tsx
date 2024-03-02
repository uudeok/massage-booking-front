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
import HeaderDropMenu from "./HeaderDropMenu";
import RenderList from "../common/map/RenderList";
import { getUserName } from "../../util/auth";
import { useEffect, useState } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const userName = getUserName();

  useEffect(() => {
    setIsLoggedIn(!!userName);
  }, [userName]);

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
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
            {!isLoggedIn && <Link to="/login">로그인</Link>}
            {isLoggedIn && (
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
