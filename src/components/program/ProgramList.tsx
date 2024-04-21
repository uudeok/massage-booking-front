import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import { TMassageTable } from '../../@types/massage';
import styled from 'styled-components';
import Banner from '../common/UI/banner/Banner';
import LoadingBar from '../common/UI/loading/LoadingBar';

const ProgramList = () => {
	const { data: massageList = [] } = useGetMassageListQuery();

	console.log(massageList);

	return (
		<>
			<Banner img="programbanner.webp" />
			<ContainerStyle>
				<InnerBoxStyle>
					<TitleStyle>프로그램 안내</TitleStyle>
					<div>자연치유 쉼 만의 다양한 프로그램</div>
				</InnerBoxStyle>
			</ContainerStyle>
		</>
	);
};

export default ProgramList;

const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'GmarketSansMedium';
`;

const InnerBoxStyle = styled.ul`
	width: 65rem;
	margin: auto;
	padding: 3rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 60%;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 100%;
	}
`;

const TitleStyle = styled.h1`
	font-size: 2rem;
	margin-top: 3rem;
	line-height: 2.5rem;
	border-bottom: 1px solid black;
	margin-bottom: 2rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 1.5rem;
	}
`;

const Self = styled.div`
	height: 30rem;
	width: 80%;
	margin: 0 auto;
`;
