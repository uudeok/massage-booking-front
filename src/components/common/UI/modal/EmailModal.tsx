import ContactUsForm from '../../../FAQ/ContactUsForm';
import styled from 'styled-components';
import { RESULT_VALUES } from '../../../../@types/faq';
import { BackDropStyle, ModalStyle } from '../../modal/styles/modal.styles';
import { Header, ModalWrapper } from '../../modal/Modal';

type EmailModalType = {
	closeModal: () => void;
	handleSubmitting: (result: RESULT_VALUES) => void;
};

const EmailModal = ({ closeModal, handleSubmitting }: EmailModalType) => {
	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle height="30rem" width="26rem" $top="5%">
				<ModalWrapper closeModal={closeModal}>
					<ModalHeader>문의 하기</ModalHeader>
					<ContactUsForm closeEmailModal={closeModal} handleSubmitting={handleSubmitting} />
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default EmailModal;

const ModalHeader = styled(Header)`
	text-align: center;
	font-size: 30px;
	margin-bottom: 1.3rem;
	color: ${(props) => props.theme.palette.fluorGreen};
	font-family: ${(props) => props.theme.fonts.gmarket};
	padding: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.3rem;
	}
`;
