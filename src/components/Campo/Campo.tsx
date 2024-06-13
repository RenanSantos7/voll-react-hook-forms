import { FieldValues } from 'react-hook-form';
import Fieldset from '../styles/Fieldset';
import Input from '../styles/Input';
import Label from '../styles/Label';

interface CampoProps extends FieldValues {
	label: string;
	placeholder: string;
	type?: 'text' | 'email' | 'password';
}

export default function Campo({
	label,
	type = 'text',
	placeholder,
	...props
}: CampoProps) {
	return (
		<Fieldset>
			<Label>{label}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		</Fieldset>
	);
}
