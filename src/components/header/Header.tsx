import { Link, useNavigate } from 'react-router-dom';
import { getUserName } from '../../util/auth';
import { useEffect, useState } from 'react';
import { useLogoutMutation } from '../../api/users/usersQuery';

import HeaderDropMenu from './HeaderDropMenu';
import RenderList from '../common/map/DynamicRender';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import styled from 'styled-components';

type MenuType = {
	key: string;
	value: string;
};

export const MENU_LIST = [
	{ key: 'program', value: '프로그램 안내' },
	{ key: 'information', value: '회원권 안내' },
	{ key: 'notice', value: '공지사항' },
	{ key: 'faq', value: '자주하는 질문' },
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
		await logout();
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
			<Self>
				<LogoStyle>
					<Link to="/">
						<h2>자연치유 쉼</h2>
					</Link>
				</LogoStyle>
				<MenuStyle>
					<RenderList data={MENU_LIST} renderItem={renderMenuItem} />
				</MenuStyle>
				<ButtonStyle>
					<ConditionalDisplay condition={isLoggedIn} alternativeComponent={<Link to="/login">로그인</Link>}>
						<button onClick={() => navigate('/mypage/order')}>내정보</button>
						<button onClick={logoutHandler}>로그아웃</button>
					</ConditionalDisplay>
				</ButtonStyle>
			</Self>
		</>
	);
};

export default Header;

const Self = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	font-family: ${(props) => props.theme.fonts.pretend};
	align-items: end;
	padding: 0.5rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		height: 60px;
	}
`;

const LogoStyle = styled.div`
	width: 25%;
	font-size: 2rem;
	font-family: ${(props) => props.theme.fonts.gmarket};

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 30%;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 60%;
		padding: 0;
	}
`;

const MenuStyle = styled.div`
	width: 60%;
	display: flex;
	font-size: 1.2rem;
	justify-content: space-evenly;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 50%;
		font-size: 1rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		display: none;
	}
`;

const ButtonStyle = styled.div`
	width: 15%;
	gap: 1rem;
	display: flex;
	justify-content: right;

	button {
		border: none;
		background-color: white;
		font-family: 'Pretendard-Regular';
		font-size: 1rem;
		cursor: pointer;
		color: black;

		@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
			font-size: 15px;
		}
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 20%;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 40%;
		padding: 0;
	}
`;
