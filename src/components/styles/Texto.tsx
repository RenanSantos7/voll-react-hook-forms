import styled from 'styled-components';

interface TextoProps {
	$bold?: boolean;
	$italic?: boolean;
}

const Texto = styled.p<TextoProps>`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 0.5em;
	line-height: 1.5;
	font-weight: ${props => props.$bold ? 'bold' : 'normal'};
	font-style: ${props => props.$italic ? 'italic' : 'normal'};
`;

export default Texto;
