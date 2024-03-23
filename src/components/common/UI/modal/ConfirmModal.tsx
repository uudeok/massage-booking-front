import { RESULT_VALUES } from '../../../../@types/faq';
import { useState, useEffect } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import theme from '../../../../styles/theme';
import Modal from './Modal';
import styled from 'styled-components';
import { FAQ_ERROR } from '../../../../const/faq';
import CommonButton from '../../button/CommonButton';

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
		<Modal closeModal={closeModal} height="15rem" $padding="0px">
			<HeaderStyle>
				<CiCircleInfo />
			</HeaderStyle>
			<ContentStyle>
				<p>{messageState.message}</p>
				<p>{messageState.subMessage}</p>
			</ContentStyle>
			<ButtonBoxStyle>
				<CommonButton
					type="round"
					width="5rem"
					$padding="0.5rem"
					$border="none"
					$backgroundColor={`${theme.palette.fluorGreen}`}
					color="white"
					onClickButton={() => closeModal()}
				>
					확인
				</CommonButton>
			</ButtonBoxStyle>
		</Modal>
	);
};

export default ConfirmModal;

const HeaderStyle = styled.h2`
	font-size: 40px;
	height: 5rem;
	background-color: ${theme.palette.fluorGreen};
	color: white;
	font-family: ${theme.fonts.gmarket};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentStyle = styled.div`
	font-family: ${theme.fonts.pretend};
	text-align: left;
	font-size: 20px;
	height: 7rem;
	padding: 0.5rem;
	text-align: center;
	line-height: 2;
`;

const ButtonBoxStyle = styled.div`
	text-align: center;
	padding: 0.5rem;
`;
