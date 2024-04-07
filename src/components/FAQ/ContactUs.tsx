import { useModal } from '../../hooks/useModal';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CommonButton from '../common/button/CommonButton';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import EmailModal from '../common/UI/modal/EmailModal';
import ConfirmModal from '../common/UI/modal/ConfirmModal';
import { RESULT_VALUES } from '../../@types/faq';

const ContactUs = () => {
	const { isOpen, showModal, closeModal } = useModal();
	const { isOpen: openConfirm, showModal: showConfirm, closeModal: closeConfirm } = useModal();
	const [result, setResult] = useState<RESULT_VALUES | null>(null);

	const handleModal = () => {
		showModal();
	};

	const handleSubmitting = (result: RESULT_VALUES) => {
		// console.log('Result', result);
		setResult(result);
		showConfirm();
	};

	return (
		<Self>
			{openConfirm && <ConfirmModal closeModal={closeConfirm} result={result} />}
			<ConditionalDisplay condition={isOpen}>
				<EmailModal closeModal={closeModal} handleSubmitting={handleSubmitting} />
			</ConditionalDisplay>
			<p>찾으시는 내용이 없다면 문의하기를 이용해주세요</p>
			<CommonButton
				width="11rem"
				$padding="0.8rem"
				$backgroundColor={`${theme.palette.greenDk}`}
				color="white"
				$border="none"
				fontSize="14px"
				onClickButton={handleModal}
			>
				문의하기
			</CommonButton>
		</Self>
	);
};

export default ContactUs;

const Self = styled.div`
	background-color: #f6f7f8;
	height: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: ${(props) => props.theme.fonts.pretend};
	font-size: 20px;
	font-weight: bold;
	gap: 2rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 15px;
	}
`;
