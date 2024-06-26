import { BackDropStyle } from '../common/UI/modal/styles/modal.styles';
import { FcHighPriority } from 'react-icons/fc';
import styled from 'styled-components';
import { ModalWrapper, Header, Content } from '../common/UI/modal/ModalWrapper';

type ErrorModalProps = {
	closeModal: () => void;
	message: string;
};

const ErrorModal = ({ closeModal, message }: ErrorModalProps) => {
	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle>
				<ModalWrapper>
					<ModalHeader>
						<FcHighPriority />
					</ModalHeader>
					<ModalContent>{message}</ModalContent>
					<Button onClick={() => closeModal()}>확인</Button>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default ErrorModal;

const ModalHeader = styled(Header)`
	height: 35%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		font-size: 3rem;
	}
`;

const ModalContent = styled(Content)`
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	border: none;
	width: 100%;
	height: 25%;
	color: white;
	cursor: pointer;
	font-size: 17px;
	font-family: ${(props) => props.theme.fonts.pretend};
	background-color: ${(props) => props.theme.palette.warn};

	&:hover {
		background-color: orangered;
	}
`;

const ModalStyle = styled.div`
	position: fixed;
	top: 30%;
	left: calc(50% - 11rem);
	width: 22rem;
	height: 15rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	background-color: white;
	text-align: center;
	border-radius: 15px;
	overflow: hidden;

	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
