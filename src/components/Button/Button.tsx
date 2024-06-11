import styled from 'styled-components';

interface ButtonProps {
	children: React.ReactNode;
	type?: 'submit' | 'button';
	onClick?: ([arg]: any) => void;
	width?: string;
}

interface StyledButtonProps {
	$width?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
	background-color: var(--azul-escuro);
	border-radius: 8px;
	padding: 12px 32px;
	color: var(--branco);
	border: none;
	margin-top: 1em;
	font-weight: 700;
	line-height: 19px;
	width: ${({ $width }) => ($width ? $width : 'unset')};
	cursor: pointer;
`;

export default function Button({
	type = 'button',
	children,
	onClick,
	width,
}: ButtonProps) {
	return (
		<StyledButton type={type} onClick={onClick} $width={width}>
			{children}
		</StyledButton>
	);
}
