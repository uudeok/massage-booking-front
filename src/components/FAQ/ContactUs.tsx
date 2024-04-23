import { useModal } from '../../hooks/useModal';
import { useEffect, useState } from 'react';
import { FAQ_ERROR } from '../../const/faq';

import styled from 'styled-components';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import EmailModal from '../modal/EmailModal';
import ConfirmModal from '../modal/ConfirmModal';
import Button from '../common/UI/button/Button';

const ContactUs = () => {
	const { isOpen, showModal, closeModal } = useModal();
	const { isOpen: isOpenConfirmModal, showModal: showConfirmModal, closeModal: closeConfirmModal } = useModal();
	const [result, setResult] = useState<boolean | null>(null);
	const [message, setMessage] = useState({ message: '', subMessage: '' });

	useEffect(() => {
		if (result === null) return;

		if (result) {
			setMessage({ message: FAQ_ERROR.success, subMessage: FAQ_ERROR.success_sub });
		} else {
			setMessage({ message: FAQ_ERROR.failed, subMessage: FAQ_ERROR.failed_sub });
		}
		showConfirmModal();
		setResult(null);
	}, [result]);

	return (
		<Self>
			<ConditionalDisplay condition={isOpenConfirmModal}>
				<ConfirmModal closeModal={closeConfirmModal} contents={message} />
			</ConditionalDisplay>
			<ConditionalDisplay condition={isOpen}>
				<EmailModal closeModal={closeModal} setResult={setResult} />
			</ConditionalDisplay>

			<Wrapper>
				<p>찾으시는 내용이 없다면 문의하기를 이용해주세요</p>
				<ButtonWrapper>
					<Button onClick={() => showModal()} size="lg" role="plain">
						문의하기
					</Button>
				</ButtonWrapper>
			</Wrapper>
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
	width: 100%;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 15px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;

const ButtonWrapper = styled.div`
	margin: 0 auto;
	width: 50%;
`;
