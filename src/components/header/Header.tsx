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
import RenderList from "../common/map/DynamicRender";
import { getUserName } from "../../util/auth";
import { useEffect, useState } from "react";
import { useLogoutMutation } from "../../api/users/usersQuery";
import ConditionalDisplay from "../common/maybe/ConditionalDisplay";

type MenuType = {
  key: string;
  value: string;
};

export const MENU_LIST = [
  { key: "program", value: "프로그램 안내" },
  { key: "information", value: "회원권 안내" },
  { key: "notice", value: "공지사항" },
  { key: "faq", value: "자주하는 질문" },
] as MenuType[];

const Header = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const userName = getUserName();

  useEffect(() => {
    setIsLoggedIn(!!userName);
  }, [userName]);

  const logoutHandler = async () => {
    try {
      await logout();
      localStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("로그아웃 중 에러 발생:", error);
    }
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
            <ConditionalDisplay
              condition={isLoggedIn}
              alternativeComponent={<Link to="/login">로그인</Link>}
            >
              <LogoutBoxStyle>
                <button onClick={() => navigate("/mypage/order")}>
                  내정보
                </button>
                <button onClick={logoutHandler}>로그아웃</button>
              </LogoutBoxStyle>
            </ConditionalDisplay>
          </LoginBoxStyle>
        </InnerContainerStyle>
      </ContainerStyle>
    </>
  );
};

export default Header;
