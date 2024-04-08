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

export const ModalStyle = styled.div<{ $width?: string; $left?: string }>`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	left: calc(50% - 11.5rem);
	width: 17rem;
	padding: 1.5rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	background-color: white;
	top: 10%;
	height: 10rem;
	text-align: center;
	border-radius: 15px;

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
