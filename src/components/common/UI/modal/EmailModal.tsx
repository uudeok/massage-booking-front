import ContactUsForm from '../../../FAQ/ContactUsForm';
import Modal from './Modal';
import styled from 'styled-components';
import { RESULT_VALUES } from '../../../../@types/faq';

type EmailModalType = {
	closeModal: () => void;
	handleSubmitting: (result: RESULT_VALUES) => void;
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
	color: ${(props) => props.theme.palette.fluorGreen};
	font-family: ${(props) => props.theme.fonts.gmarket};
	padding: 0.6rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.3rem;
	}
`;
