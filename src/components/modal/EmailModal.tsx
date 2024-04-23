import ContactUsForm from '../FAQ/ContactUsForm';
import styled from 'styled-components';

import { BackDropStyle, ModalStyle } from '../common/UI/modal/styles/modal.styles';
import { ModalWrapper, Header, Content } from '../common/UI/modal/ModalWrapper';

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
					<ModalHeader>문의하기</ModalHeader>
					<Content>
						<ContactUsForm closeEmailModal={closeModal} setResult={setResult} />
					</Content>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default EmailModal;

const ModalHeader = styled(Header)`
	text-align: center;
	font-size: 33px;

	color: ${(props) => props.theme.palette.iconic};
	font-family: ${(props) => props.theme.fonts.gmarket};
	padding: 1rem;
`;
