import ContactUsForm from '../FAQ/ContactUsForm';
import styled from 'styled-components';

import { BackDropStyle, ModalStyle } from '../Common/UI/Modal/styles/modal.styles';
import { ModalWrapper, Header, Content } from '../Common/UI/Modal/ModalWrapper';

type EmailModalType = {
	closeModal: () => void;
	setResult: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const EmailModal = ({ closeModal, setResult }: EmailModalType) => {
	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle height="30rem" width="26rem" $top="5%">
				<ModalWrapper>
					<ModalHeader>문의 하기</ModalHeader>
					<ModalContent>
						<ContactUsForm closeEmailModal={closeModal} setResult={setResult} />
					</ModalContent>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default EmailModal;

const ModalHeader = styled(Header)`
	text-align: center;
	font-size: 33px;

	color: ${(props) => props.theme.palette.fluorGreen};
	font-family: ${(props) => props.theme.fonts.gmarket};
	padding: 1rem;
`;

const ModalContent = styled(Content)`
	padding: 0.5rem;
`;
