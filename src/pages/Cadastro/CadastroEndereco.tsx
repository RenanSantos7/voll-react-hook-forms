import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';
import {
	Fieldset,
	Formulario,
	FormContainer,
	Input,
	Label,
	Titulo,
	ErrorMessage,
} from '../../components/styles';
import { useDataContext } from '../../contexts/DataContext';

interface Campos {
	cep: string;
	rua: string;
	numero: string;
	bairro: string;
	localidade: string;
}

export default function CadastroEndereco() {
	const {
		formState: { errors },
		register,
		handleSubmit,
		setError,
		setValue,
		watch,
	} = useForm<Campos>();
	const { setLoading } = useDataContext();
	const cepDigitado = watch('cep');
	const navegarPara = useNavigate();

	function aoSubmeter(data: Campos) {
		console.log(data);
	}

	async function buscaCep(cep: string) {
		if (!cep) {
			setError('cep', {
				type: 'manual',
				message: 'CEP inválido',
			});
			return;
		}
		setLoading(true);
		const endPoint = `https://viacep.com.br/ws/${cep}/json/`;
		try {
			const resposta = await fetch(endPoint);
			if (resposta.ok) {
				const dados = await resposta.json();
				setValue('rua', dados.logradouro);
				setValue('bairro', dados.bairro);
				setValue('localidade', `${dados.localidade}, ${dados.uf}`);
			} else {
				throw new Error(
					`Erro na requisição do CEP: ${resposta.status} ${resposta.statusText}`,
				);
			}
		} catch (error) {
			console.error('Erro ao buscar CEP', error);
		}

		setLoading(false);
	}

	return (
		<>
			<Titulo>Agora, mais alguns dados sobre você:</Titulo>
			<Formulario onSubmit={handleSubmit(aoSubmeter)}>
				<Fieldset>
					<Label htmlFor='campo-cep'>CEP</Label>
					<Input
						id='campo-cep'
						placeholder='Insira seu CEP'
						type='text'
						{...register('cep')}
						$error={!!errors.cep}
						onBlur={() => buscaCep(cepDigitado)}
					/>
					{errors.cep && (
						<ErrorMessage>{errors.cep.message}</ErrorMessage>
					)}
				</Fieldset>
				<Fieldset>
					<Label htmlFor='campo-rua'>Rua</Label>
					<Input
						id='campo-rua'
						placeholder='Rua Agarikov'
						type='text'
						{...register('rua')}
						$error={!!errors.rua}
					/>
					{errors.rua && (
						<ErrorMessage>{errors.rua.message}</ErrorMessage>
					)}
				</Fieldset>

				<FormContainer>
					<Fieldset>
						<Label htmlFor='campo-numero-rua'>Número</Label>
						<Input
							id='campo-numero'
							placeholder='Ex: 1440'
							type='text'
							{...register('numero')}
							$error={!!errors.numero}
						/>
						{errors.numero && (
						<ErrorMessage>{errors.cep.message}</ErrorMessage>
					)}
					</Fieldset>
					<Fieldset>
						<Label htmlFor='campo-bairro'>Bairro</Label>
						<Input
							id='campo-bairro'
							placeholder='Vila Mariana'
							type='text'
							{...register('bairro')}
							$error={!!errors.bairro}
						/>
						{errors.bairro && (
						<ErrorMessage>{errors.bairro.message}</ErrorMessage>
					)}
					</Fieldset>
				</FormContainer>
				<Fieldset>
					<Label htmlFor='campo-localidade'>Localidade</Label>
					<Input
						id='campo-localidade'
						placeholder='São Paulo, SP'
						type='text'
						{...register('localidade')}
						$error={!!errors.localidade}
					/>
					{errors.localidade && (
						<ErrorMessage>{errors.localidade.message}</ErrorMessage>
					)}
				</Fieldset>
				<Button type='submit'>Cadastrar</Button>
			</Formulario>
		</>
	);
}
