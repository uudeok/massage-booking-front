import { useModal } from '../../hooks/useModal';
import { useEffect, useState } from 'react';
import { FAQ_ERROR } from '../../const/faq';

import styled from 'styled-components';
import theme from '../../styles/theme';
import CommonButton from '../common/UI/button/CommonButton';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import EmailModal from '../modal/EmailModal';
import ConfirmModal from '../modal/ConfirmModal';

export type MessageType = {
	message: string;
	subMessage: string;
};

const ContactUs = () => {
	const { isOpen, showModal, closeModal } = useModal();
	const { isOpen: isOpenConfirmModal, showModal: showConfirmModal, closeModal: closeConfirmModal } = useModal();
	const [result, setResult] = useState<boolean | null>(null);
	const [message, setMessage] = useState<MessageType>({ message: '', subMessage: '' });

	useEffect(() => {
		if (result === null) return;

		if (result) {
			setMessage({ message: FAQ_ERROR.success, subMessage: FAQ_ERROR.success_sub });
			showConfirmModal();
		} else {
			setMessage({ message: FAQ_ERROR.failed, subMessage: FAQ_ERROR.failed_sub });
			showConfirmModal();
		}

		setResult(null);
	}, [result]);

	return (
		<Self>
			{isOpenConfirmModal && <ConfirmModal closeModal={closeConfirmModal} contents={message} />}
			<ConditionalDisplay condition={isOpen}>
				<EmailModal closeModal={closeModal} setResult={setResult} />
			</ConditionalDisplay>

			<p>찾으시는 내용이 없다면 문의하기를 이용해주세요</p>
			<CommonButton
				width="11rem"
				$padding="0.8rem"
				$backgroundColor={`${theme.palette.greenDk}`}
				color="white"
				$border="none"
				fontSize="14px"
				onClickButton={() => showModal()}
			>
				문의하기
			</CommonButton>
		</Self>
	);
};

export default ContactUs;

const Self = styled.div`
	background-color: #f6f7f8;
	height: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: ${(props) => props.theme.fonts.pretend};
	font-size: 20px;
	font-weight: bold;
	gap: 2rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 15px;
	}
`;
