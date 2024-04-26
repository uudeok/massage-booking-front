import styled from 'styled-components';
import { ButtonHTMLAttributes, Ref, forwardRef, useId } from 'react';
import { Role, Size, buttonRoleStyle, buttonSizeStyle } from './ButtonBase';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	fullWidth?: boolean;
	role?: Role;
	size: Size;
}

const StyledButton = styled.button<{ fullWidth?: boolean; role?: Role; size: Size }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
	border: 0 solid transparent;
	background-color: ${(props) => props.theme.palette.iconic};
	color: white;
	cursor: pointer;
	font-size: 17px;
	// 요소 내의 텍스트가 줄바꿈 되지 않고 한 줄에 계속 표시
	white-space: nowrap;
	// 요소 내의 텍스트를 선택할 수 없도록 지정 (드래그방지)
	user-select: none;
	// 브라우저에서 폰트를 부드럽게 렌더링
	-webkit-font-smoothing: antialiased;
	font-family: ${(props) => props.theme.fonts.pretend};
	font-weight: 600;
	transition:
		color 0.1s ease-in-out,
		background-color 0.1s ease-in-out;

	&:focus {
		outline: none;
	}

	&:disabled {
		opacity: 0.26;
		cursor: not-allowed;
	}

	&:hover {
		background-color: ${(props) => props.theme.palette.combi};
	}

	${buttonRoleStyle};
	${buttonSizeStyle}
`;

const Button = forwardRef(function Button(props: Props, forwardedRef: Ref<HTMLButtonElement>) {
	const { fullWidth = true, size, role, children, ...rest } = props;
	const buttonId = useId();

	return (
		<StyledButton ref={forwardedRef} id={buttonId} fullWidth={fullWidth} size={size} role={role} {...rest}>
			<span>{children}</span>
		</StyledButton>
	);
});

export default Button;
