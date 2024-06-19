import { FieldError, FieldValues } from 'react-hook-form';
import Fieldset from '../styles/Fieldset';
import Label from '../styles/Label';
import InputMask from '../InputMask/InputMask';
import { ErrorMessage } from '../styles';

interface CampoProps extends FieldValues {
	label: string;
	placeholder: string;
	type?: 'text' | 'email' | 'password';
	mask?: string;
	valor: string;
	aoMudar: (event: React.ChangeEvent<HTMLInputElement>) => void;
	erro: FieldError;
	$error?: boolean;
}

export default function Campo({
	label,
	type = 'text',
	placeholder,
	mask = '',
	valor,
	aoMudar,
	erro,
	...props
}: CampoProps) {

	return (
		<Fieldset>
			<Label>{label}</Label>
			<InputMask
				mask={mask}
				type={type}
				placeholder={placeholder}
				value={valor}
				onChange={aoMudar}
				{...props}
			/>
			{erro && (
				<ErrorMessage>{erro.message}</ErrorMessage>
			)}
		</Fieldset>
	);
}
