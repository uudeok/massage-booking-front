import { useEffect } from 'react';
import styled from 'styled-components';

type TProps = {
	children: React.ReactNode;
	closeModal: () => void;
	height?: string;
	$top?: string;
	$radius?: string;
	$padding?: string;
};

const Modal = ({ children, closeModal, height, $top, $radius, $padding }: TProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle $height={height} $top={$top} $radius={$radius} $padding={$padding}>
				{children}
			</ModalStyle>
		</>
	);
};

export default Modal;

const BackDropStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`;

const ModalStyle = styled.div<{
	$height?: string;
	$top?: string;
	$radius?: string;
	$padding?: string;
}>`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	left: calc(50% - 11rem);
	width: 26rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	background-color: white;

	padding: ${({ $padding }) => ($padding ? $padding : '1.5rem')};
	height: ${({ $height }) => ($height ? $height : '19rem')};
	top: ${({ $top }) => ($top ? $top : '10%')};
	border-radius: ${({ $radius }) => ($radius ? $radius : '')};

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 26rem;
		left: calc(50% - 13rem);
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.mobileWidth}) {
		width: 20rem;
		left: calc(50% - 10rem);
	}

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
