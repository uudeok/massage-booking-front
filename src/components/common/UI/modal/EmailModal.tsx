import theme from '../../../../styles/theme';
import ContactUsForm from '../../../FAQ/ContactUsForm';
import Modal from './Modal';
import styled from 'styled-components';
import { useState } from 'react';
import { useModal } from '../../../../hooks/useModal';

type EmailModalType = {
	closeModal: () => void;
	
	handleSubmitting: (result: string) => void;
};

const EmailModal = ({ closeModal, handleSubmitting }: EmailModalType) => {
	return (
		<Modal closeModal={closeModal} height="30rem" $radius="10px">
			<HeaderStyle>문의 하기</HeaderStyle>
			<ContactUsForm closeEmailModal={closeModal} handleSubmitting={handleSubmitting} />
		</Modal>
	);
};

export default EmailModal;

const HeaderStyle = styled.h2`
	text-align: center;
	font-size: 30px;
	margin-bottom: 1.3rem;
	color: ${theme.palette.greenDk};
	font-family: ${theme.fonts.gmarket};
	padding: 0.6rem;

	@media only screen and (max-width: ${theme.devise.tabletWidth}) {
		padding: 0.3rem;
	}
`;
