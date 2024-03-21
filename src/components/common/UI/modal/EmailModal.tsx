import theme from '../../../../styles/theme';
import ContactUsForm from '../../../FAQ/ContactUsForm';
import Modal from './Modal';
import styled from 'styled-components';

type EmailModalType = {
	closeModal: () => void;
};

const EmailModal = ({ closeModal }: EmailModalType) => {
	return (
		<Modal closeModal={closeModal} height="30rem">
			<HeaderStyle>문의 하기</HeaderStyle>
			<ContactUsForm />
		</Modal>
	);
};

export default EmailModal;

const HeaderStyle = styled.h2`
	border: 1px solid black;
	text-align: center;
	font-size: 30px;
  margin-bottom: 1rem;
`;
