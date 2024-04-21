import { useState } from 'react';
import { addComma } from '../../util/price';
import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import styled, { css } from 'styled-components';
import Banner from '../common/UI/banner/Banner';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import Card from '../common/UI/card/Card';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';

const ProgramList = () => {
	const { data: massageList = [] } = useGetMassageListQuery();
	const [curItem, setCurItem] = useState<number>();
	const [swiper, setSwiper] = useState<SwiperCore>();

	const handleSwiper = (index: number) => {
		if (swiper) {
			swiper.slideTo(index, 1000);
		}
	};

	return (
		<>
			<Banner img="programbanner.webp" />
			<ContainerStyle>
				<InnerBoxStyle>
					<TitleStyle>프로그램 안내</TitleStyle>
					<Wrapper>
						<Left>
							<Header>
								<div>체계적이고 전문적인 기술을 보유한</div>
								<div>자연치유 쉼의 다양한 프로그램</div>
							</Header>
							<List>
								{massageList.map((item, index) => (
									<Item
										key={item.id}
										$isCurrent={index === curItem}
										onClick={() => handleSwiper(index)}
									>
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
								onSwiper={setSwiper}
							>
								{massageList.map((item) => (
									<SwiperSlide key={item.id}>
										<Layout>
											<Image image={item.image} alt={item.item} />
											<Content>
												<Title>{item.displayItem}</Title>
												<div>{item.content}</div>
												<Detail>
													{item.detail.map((detail) => (
														<Option key={detail.time}>
															<span>{detail.time}분</span>
															<span>{addComma(detail.price)}</span>
														</Option>
													))}
												</Detail>
											</Content>
										</Layout>
									</SwiperSlide>
								))}
							</Swiper>
						</Right>
					</Wrapper>
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

const Wrapper = styled.div`
	display: flex;

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		flex-direction: column;
	}
`;

const Item = styled.li<{ $isCurrent: boolean }>`
	cursor: pointer;

	${({ $isCurrent }) =>
		$isCurrent &&
		css`
			color: ${(props) => props.theme.palette.greenDk};
		`}

	&:hover {
		color: ${(props) => props.theme.palette.greenDk};
	}
`;

const Header = styled.div`
	padding: 0.5rem;
	font-weight: bold;
	font-size: 22px;
	line-height: 1.5;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		font-size: 18px;
	}
`;

const List = styled.ul`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Layout = styled(Card)`
	display: flex;
	flex-direction: column;
	height: 460px;
	border-radius: 15px;
	background-color: whitesmoke;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		height: 100%;
		width: 80%;
		margin: auto;
		margin-top: 1rem;
	}
`;

const Image = styled(CardImage)`
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

const Content = styled(CardContent)`
	flex: 1;
	padding: 1rem;
`;

const Title = styled.div`
	font-size: 20px;
	margin-bottom: 0.6rem;
`;

const Detail = styled.ul`
	display: flex;
	justify-content: space-around;
	margin-top: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		flex-wrap: wrap;
		justify-content: left;
		gap: 0.5rem;
	}
`;

const Option = styled.li`
	padding: 0.5rem;
	border-radius: 50px;
	background-color: ${(props) => props.theme.palette.greenDk};
	color: white;

	span {
		margin: 3px;
	}
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

const Left = styled.div`
	width: 50%;

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 100%;
	}
`;

const Right = styled.div`
	width: 50%;

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 100%;
	}
`;
