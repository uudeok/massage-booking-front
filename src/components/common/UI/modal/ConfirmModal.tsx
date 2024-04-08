import { RESULT_VALUES } from '../../../../@types/faq';
import { useState, useEffect } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { FAQ_ERROR } from '../../../../const/faq';

import { BackDropStyle, ModalStyle } from '../../modal/styles/modal.styles';
import { Button, Content, Header, ModalWrapper } from '../../modal/Modal';
import styled from 'styled-components';

type ConfirmModalType = {
	closeModal: () => void;
	result: RESULT_VALUES | null;
};

type MessageState = {
	message: string;
	subMessage: string;
};

const ConfirmModal = ({ closeModal, result }: ConfirmModalType) => {
	const [messageState, setMessageState] = useState<MessageState>({ message: '', subMessage: '' });

	useEffect(() => {
		if (result === 'SUCCESS') {
			setMessageState({ message: FAQ_ERROR.success, subMessage: FAQ_ERROR.success_sub });
		} else if (result === 'FAILED') {
			setMessageState({ message: FAQ_ERROR.failed, subMessage: FAQ_ERROR.failed_sub });
		}
	}, [result]);

	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle height="15rem">
				<ModalWrapper closeModal={closeModal}>
					<ModalHeader>
						<CiCircleInfo />
					</ModalHeader>
					<ModalContent>
						<p>{messageState.message}</p>
						<p>{messageState.subMessage}</p>
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
