import styled from 'styled-components';
import logo from './Logo.png';

interface LogotipoProps {
	width?: number
}

interface StyledImgProps {
	$width?: number
}

const StyledImg = styled.img<StyledImgProps>`
	margin-top: 1.5rem;
	width: ${({ $width }) => $width ? `${$width}px` : 'unset'};
`;

export default function Logotipo (props: LogotipoProps) {
	return (
		<StyledImg
			src={logo}
			alt='Logo da Voll'
			$width={props.width}
		/>);
};
