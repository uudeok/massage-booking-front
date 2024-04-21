import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import styled, { css } from 'styled-components';
import Banner from '../common/UI/banner/Banner';
import { useState, useEffect } from 'react';
import Card from '../common/UI/card/Card';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'; // 타입지정을 위해 필요하다.

const ProgramList = () => {
	const { data: massageList = [] } = useGetMassageListQuery();
	const [curItem, setCurItem] = useState<number>();

	return (
		<>
			<Banner img="programbanner.webp" />
			<ContainerStyle>
				<InnerBoxStyle>
					<TitleStyle>프로그램 안내</TitleStyle>
					<Contents>
						<Left>
							<Header>
								<div>체계적이고 전문적인 기술을 보유한</div>
								<div>자연치유 쉼의 다양한 프로그램</div>
							</Header>
							<List>
								{massageList.map((item, index) => (
									<Item key={item.id} $isCurrent={index === curItem}>
										{item.displayItem}
									</Item>
								))}
							</List>
						</Left>

						<Right>
							<Swiper
								modules={[Autoplay, Navigation]}
								slidesPerView={1}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
									pauseOnMouseEnter: true,
								}}
								onSlideChange={(swiper: SwiperCore) => setCurItem(swiper.activeIndex)}
							>
								{massageList.map((item) => (
									<SwiperSlide key={item.id}>
										<Layout>
											<Image image={item.image} alt={item.item} />
											<Content>
												<Title>{item.displayItem}</Title>
												<div>{item.content}</div>
											</Content>
										</Layout>
									</SwiperSlide>
								))}
							</Swiper>
						</Right>
					</Contents>
				</InnerBoxStyle>
			</ContainerStyle>
		</>
	);
};

export default ProgramList;

const Item = styled.li<{ $isCurrent: boolean }>`
	${({ $isCurrent }) =>
		$isCurrent &&
		css`
			color: orange;
		`}
`;

const Header = styled.div`
	padding: 0.5rem;
	font-weight: bold;
	font-size: 22px;
	line-height: 1.5;
`;

const List = styled.ul`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const Layout = styled(Card)`
	display: flex;
	flex-direction: column;
	background-color: white;
	height: 450px;
	border-radius: 15px;
`;

const Image = styled(CardImage)`
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

const Content = styled(CardContent)`
	padding: 1rem;
	flex: 1;
`;

const Contents = styled.div`
	display: flex;
`;

const Title = styled.div`
	padding: 1rem;
	font-size: 20px;
`;

const Left = styled.div`
	/* border: 1px solid black; */
	width: 50%;
`;

const Right = styled.div`
	width: 50%;
`;

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
