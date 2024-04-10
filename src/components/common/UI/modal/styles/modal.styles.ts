import styled from 'styled-components';

export const BackDropStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`;

export type ModalStyleType = {
	height?: string;
	width?: string;
	$top?: string;
};

export const ModalStyle = styled.div<ModalStyleType>`
	position: fixed;
	top: 30%;
	left: calc(50% - 11rem);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	background-color: white;
	text-align: center;
	border-radius: 15px;
	overflow: hidden;

	width: ${({ width }) => (width ? width : '22rem')};
	height: ${({ height }) => (height ? height : '15rem')};
	top: ${({ $top }) => ($top ? $top : '30%')};

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

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 22rem;
	}
`;
