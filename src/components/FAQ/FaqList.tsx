import styled from 'styled-components';
import DynamicRender from '../common/map/DynamicRender';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import { FAQ_TYPE } from '../../@types/faq';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { useState } from 'react';

const FaqList = ({ faqList }: { faqList: FAQ_TYPE[] }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const renderFaqItem = (item: FAQ_TYPE) => (
		<Self key={item.id}>
			<ArticleStyle>
				<QuestionStyle>Q {item.question}</QuestionStyle>
				<ButtonStyle onClick={() => handleToggle(item.id)}>
					{openIndex === item.id ? <CiSquareMinus /> : <CiSquarePlus />}
				</ButtonStyle>
			</ArticleStyle>

			<ConditionalDisplay condition={openIndex === item.id}>
				<AnswerStyle>
					<p>A {item.answer}</p>
				</AnswerStyle>
			</ConditionalDisplay>
		</Self>
	);

	return (
		<ContainerStyle>
			<DynamicRender data={faqList} renderItem={renderFaqItem} />
		</ContainerStyle>
	);
};

export default FaqList;

const ContainerStyle = styled.div`
	width: 60rem;

	margin: 3rem auto;
	font-family: ${(props) => props.theme.fonts.pretend};

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 80%;
	}

	@media only screen and (max-width: $${(props) => props.theme.devise.tabletWidth}) {
		width: 100%;
	}
`;

const Self = styled.div`
	margin-bottom: 2rem;
`;

const ArticleStyle = styled.article`
	padding: 1rem;
	border-bottom: 1px solid black;
	display: flex;
`;

const QuestionStyle = styled.p`
	flex: 1;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: left;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 16px;
	}
`;

const ButtonStyle = styled.button`
	font-size: 25px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: transform 0.8s ease;
`;

const AnswerStyle = styled.div`
	background-color: #fafafa;
	padding: 2rem;
	line-height: 1.5;
`;
