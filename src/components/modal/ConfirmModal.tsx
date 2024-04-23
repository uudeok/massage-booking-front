import { CiCircleInfo } from 'react-icons/ci';

import { BackDropStyle, ModalStyle } from '../common/UI/modal/styles/modal.styles';
import { ModalWrapper, Header, Content } from '../common/UI/modal/ModalWrapper';
import styled from 'styled-components';
import Button from '../common/UI/button/Button';

type ConfirmModalType = {
	closeModal: () => void;
	contents: MessageType;
};

export type MessageType = {
	message: string;
	subMessage: string;
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
					<ButtonWrapper>
						<Button onClick={() => closeModal()} size="sm" role="round">
							확인
						</Button>
					</ButtonWrapper>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default ConfirmModal;

const ButtonWrapper = styled.div`
	width: 25%;
	margin: auto;
`;

const ModalHeader = styled(Header)`
	font-size: 40px;
	height: 5rem;
	background-color: ${(props) => props.theme.palette.iconic};
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
