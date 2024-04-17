import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import { TMassageTable } from '../../@types/massage';
import styled from 'styled-components';
import Banner from '../common/UI/banner/Banner';
import LoadingBar from '../common/UI/loading/LoadingBar';
import RenderList from '../common/map/DynamicRender';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';

const ProgramList = () => {
	const { data: massageList = [] } = useGetMassageListQuery();

	if (!massageList) return <LoadingBar />;

	const renderProgramItem = (item: TMassageTable) => (
		<Self key={item.id}>
			<CardImage image={item.image} alt={item.item} />
			<CardContent title={item.displayItem} content={item.content} />
		</Self>
	);

	return (
		<>
			<Banner img="programbanner.webp" />
			<ContainerStyle>
				<InnerBoxStyle>
					<TitleStyle>프로그램 안내</TitleStyle>
					<RenderList data={massageList} renderItem={renderProgramItem} />
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
