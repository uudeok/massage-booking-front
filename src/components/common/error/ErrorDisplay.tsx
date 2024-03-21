import styled from 'styled-components';

type TProps = {
	errorMessage: string | undefined;
	$padding?: string;
	fontSize?: string;
  $float? : string;
};

type ErrorDisplay = {
	$padding?: string;
	fontSize?: string;
  $float? : string;
};

const ErrorDisplay = ({ errorMessage, $padding, fontSize , $float}: TProps) => {
	return (
		<>
			{errorMessage && (
				<ErrorMessageStyle $padding={$padding} fontSize={fontSize} $float={$float}>
					{errorMessage}
				</ErrorMessageStyle>
			)}
		</>
	);
};

export default ErrorDisplay;

const ErrorMessageStyle = styled.span<ErrorDisplay>`
	text-align: center;
	color: tomato;

	padding: ${($props) => ($props.$padding ? $props.$padding : '1rem')};
	font-size: ${($props) => ($props.fontSize ? $props.fontSize : '')};
  float: ${($props) => $props.$float ? $props.$float : ''};
`;
