import { FieldValues } from 'react-hook-form';
import styled from 'styled-components';

interface ChegagemProps extends FieldValues {
	label: string;
	// required: boolean
}

const StyledLabel = styled.label`
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	gap: 1ch;
	/* border: 1px solid red; */
	color: #505050;
`;

export default function Checagem({ label, ...props }: ChegagemProps) {
	return (
		<StyledLabel>
			<input type='checkbox' {...props} />
			<span>{label}</span>
		</StyledLabel>
	);
}
