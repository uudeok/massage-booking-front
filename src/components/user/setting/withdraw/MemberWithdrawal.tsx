import styled from 'styled-components';

const MemberWithdrawal = () => {
	return (
		<ContainerStyle>
			<HeaderStyle>‖ 회원 탈퇴</HeaderStyle>
			<CardBoxStyle>
				<TitleBoxStyle>
					<h2>회원탈퇴</h2>
					<button>탈퇴</button>
				</TitleBoxStyle>
				<p>자연치유 쉼 회원 탈퇴하기</p>
			</CardBoxStyle>
		</ContainerStyle>
	);
};

export default MemberWithdrawal;

const ContainerStyle = styled.div`
	width: 100%;
`;

const HeaderStyle = styled.h2`
	font-family: ${(props) => props.theme.fonts.pretend};
	font-size: 1.5rem;
	padding: 1rem;
`;

const TitleBoxStyle = styled.div`
	display: flex;
	margin-bottom: 1rem;

	h2 {
		flex: 1;
		font-size: 1.2rem;
	}

	button {
		border-radius: 50px;
		width: 3rem;
		padding: 0.5rem;
		border: 1px solid lightgrey;
		background-color: transparent;
		cursor: pointer;
	}
`;
const CardBoxStyle = styled.div`
	width: 60%;
	border-radius: 10px;
	border: 1px solid lightgrey;
	padding: 1rem;
	min-height: 6rem;
	margin-bottom: 1rem;
	font-family: ${(props) => props.theme.fonts.pretend};

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		padding: 1rem;
		width: 100%;
	}
`;
