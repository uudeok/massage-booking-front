import { css } from 'styled-components';

export type Role = 'round' | 'kakao' | 'cancel' | 'none';
export type Size = 'sm' | 'lg';

export const buttonRoleStyle = css<{ role?: Role }>`
	${({ role }) => {
		if (role === 'round') {
			return css`
				border-radius: 10px;
			`;
		}

		if (role === 'kakao') {
			return css`
				font-family: ${(props) => props.theme.fonts.pretend};
				background: url(//storage.keepgrow.com/admin/campaign/20200611043456590.svg) no-repeat center;
				background-position: 28px;
				background-color: ${(props) => props.theme.palette.kakaoColor};
				font-size: 1rem;
				cursor: pointer;
				margin-top: 1rem;
				width: 100%;
				color: black;
				border-radius: 10px;
				text-align: center;
				border: none;
				padding: 1rem;

				&:hover {
					background-color: ${(props) => props.theme.palette.kakaoColor};
				}
			`;
		}

		if (role === 'cancel') {
			return css`
				background-color: whitesmoke;
				color: grey;
				border-radius: 10px;

				&:hover {
					background-color: whitesmoke;
					color: black;
				}
			`;
		}

		if (role === 'none') {
			return css`
				background-color: transparent;
				color: black;
				font-size: 1rem;
				justify-content: left;
				font-weight: normal;

				&:hover {
					color: ${(props) => props.theme.palette.grey};
					background-color: transparent;
				}
			`;
		}
	}}
`;

export const buttonSizeStyle = css<{ size: Size }>`
	${({ size }) => {
		if (size === 'sm') {
			return css`
				height: 35px;
			`;
		}

		if (size === 'lg') {
			return css`
				height: 45px;
			`;
		}
	}}
`;
