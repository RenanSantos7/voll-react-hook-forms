import { Button } from '../../components';
import {
	Fieldset,
	Formulario,
	FormContainer,
	Input,
	Label,
	Titulo,
} from '../../components/styles';

export default function CadastroEndereco () {
	return (
		<>
			<Titulo>Agora, mais alguns dados sobre você:</Titulo>
			<Formulario>
				<Fieldset>
					<Label htmlFor='campo-cep'>CEP</Label>
					<Input
						id='campo-cep'
						placeholder='Insira seu CEP'
						type='text'
					/>
				</Fieldset>
				<Fieldset>
					<Label htmlFor='campo-rua'>Rua</Label>
					<Input
						id='campo-rua'
						placeholder='Rua Agarikov'
						type='text'
					/>
				</Fieldset>

				<FormContainer>
					<Fieldset>
						<Label htmlFor='campo-numero-rua'>Número</Label>
						<Input
							id='campo-numero-rua'
							placeholder='Ex: 1440'
							type='text'
						/>
					</Fieldset>
					<Fieldset>
						<Label htmlFor='campo-bairro'>Bairro</Label>
						<Input
							id='campo-bairro'
							placeholder='Vila Mariana'
							type='text'
						/>
					</Fieldset>
				</FormContainer>
				<Fieldset>
					<Label htmlFor='campo-localidade'>Localidade</Label>
					<Input
						id='campo-localidade'
						placeholder='São Paulo, SP'
						type='text'
					/>
				</Fieldset>
				<Button type='submit'>Cadastrar</Button>
			</Formulario>
		</>
	);
};
