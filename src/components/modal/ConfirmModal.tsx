import { CiCircleInfo } from 'react-icons/ci';

import { BackDropStyle, ModalStyle } from '../common/UI/Modal/styles/modal.styles';
import { ModalWrapper, Header, Button, Content } from '../common/UI/Modal/ModalWrapper';
import styled from 'styled-components';
import { MessageType } from '../FAQ/ContactUs';

type ConfirmModalType = {
	closeModal: () => void;
	contents: MessageType;
};

const ConfirmModal = ({ closeModal, contents }: ConfirmModalType) => {
	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle height="15rem">
				<ModalWrapper>
					<ModalHeader>
						<CiCircleInfo />
					</ModalHeader>
					<ModalContent>
						<p>{contents.message}</p>
						<p>{contents.subMessage}</p>
					</ModalContent>
					<ModalButton onClick={() => closeModal()}>확인</ModalButton>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default ConfirmModal;

const ModalHeader = styled(Header)`
	font-size: 40px;
	height: 5rem;
	background-color: ${(props) => props.theme.palette.fluorGreen};
	color: white;
	font-family: ${(props) => props.theme.fonts.gmarket};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled(Content)`
	font-family: ${(props) => props.theme.fonts.pretend};
	text-align: left;
	font-size: 20px;
	height: 7rem;
	padding: 0.5rem;
	text-align: center;
	line-height: 2;
`;

const ModalButton = styled(Button)`
	text-align: center;
	padding: 0.5rem;
	border: none;
	color: white;
	background-color: ${(props) => props.theme.palette.fluorGreen};
	width: 5rem;
	cursor: pointer;
	border-radius: 50px;
`;
