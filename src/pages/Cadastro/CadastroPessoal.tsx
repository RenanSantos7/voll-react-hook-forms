import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Campo } from '../../components';
import {
	Checkbox,
	ErrorMessage,
	Fieldset,
	Formulario,
	Input,
	Label,
	Titulo,
} from '../../components/styles';
import { useDataContext } from '../../contexts/DataContext';
import { ICliente } from '../../types/types';
import { postData } from '../../utils/requisicoes';
import InputMask from '../../components/InputMask/InputMask';
import { esquemaCadastro } from './cadastro.schema';

type FormTipos = z.infer<typeof esquemaCadastro>

export default function CadastroPessoal() {
	const {
		formState: { errors, isSubmitSuccessful },
		handleSubmit,
		register,
		control,
	} = useForm<FormTipos>({
		mode: 'all',
		resolver: zodResolver(esquemaCadastro),
		defaultValues: {
			nome: '',
			email: '',
			telefone: '',
			senha: '',
			senhaVerificada: '',
			termos: false
		},
	});

	const {
		clientes, setClientes, setClienteCriado, setModalMsg
	} = useDataContext();
	const navegarPara = useNavigate();

	function cadastrarCliente(obj: Omit<ICliente, 'id'>) {
		if (clientes.some(cliente => cliente.nome === obj.nome)) {
			setModalMsg('Já existe um cliente com esse nome.');
		} else if (clientes.some(cliente => cliente.email === obj.email)) {
			setModalMsg('Já existe um cliente com esse e-mail.');
		} else {
			const ids = clientes.map(cliente => cliente.id);
			const ultimoId = ids.reduce((a, b) => Math.max(a, b), 0);
			const proxId = ultimoId + 1;
			const novoCliente = { id: proxId, ...obj };
			postData('clientes', novoCliente);
			setClientes(prev => [...prev, novoCliente]);
			setClienteCriado(novoCliente);
			navegarPara('/endereco');
		}
	}

	function aoSubmeter(data: FormTipos) {
		const novoCliente = {
			nome: data.nome,
			email: data.email,
			telefone: data.telefone,
			senha: data.senha,
		};
		console.log(novoCliente);
		cadastrarCliente(novoCliente);
	}

	return (
		<>
			<Titulo>Insira alguns dados básicos:</Titulo>
			<Formulario onSubmit={handleSubmit(aoSubmeter)}>
				<Fieldset>
					<Label>Nome</Label>
					<Input
						placeholder='Digite seu nome completo'
						{...register('nome')}
						$error={!!errors.nome}
					/>
					{errors.nome && (
						<ErrorMessage>{errors.nome.message}</ErrorMessage>
					)}
				</Fieldset>

				<Fieldset>
					<Label>Email</Label>
					<Input
						placeholder='Insira seu endereço de email'
						type='email'
						{...register('email')}
						$error={!!errors.email}
					/>
					{errors.email && (
						<ErrorMessage>{errors.email.message}</ErrorMessage>
					)}
				</Fieldset>

				<Controller
					control={control}
					name='telefone'
					rules={{
						required: 'Você precisa fornecer seu telefone',
						pattern: {
							value: /^\d{2}9?\d{8}$/,
							message: `Tem certeza que seu telefone está correto?
									O sistema tá dizendo que esse formato é inválido. 🤖`,
						},
					}}
					render={({ field }) => (
						<Fieldset>
							<Label>Telefone</Label>
							<InputMask
								mask={'(99) 99999-9999'}
								placeholder='Ex: (DD) XXXXX-XXXX'
								$error={!!errors.telefone}
								onChange={field.onChange}
								value={field.value}
							/>
							{errors.telefone && (
								<ErrorMessage>
									{errors.telefone.message}
								</ErrorMessage>
							)}
						</Fieldset>
					)}
				/>

				<Fieldset>
					<Label>Senha</Label>
					<Input
						placeholder='Crie uma senha'
						type='password'
						autoComplete='new-password'
						{...register('senha')}
						$error={!!errors.senha}
					/>
					{errors.senha && (
						<ErrorMessage>{errors.senha.message}</ErrorMessage>
					)}
				</Fieldset>

				<Fieldset>
					<Label>Repita a senha</Label>
					<Input
						placeholder='Repita a senha anterior'
						type='password'
						{...register('senhaVerificada')}
						$error={!!errors.senhaVerificada}
					/>
					{errors.senhaVerificada && (
						<ErrorMessage>
							{errors.senhaVerificada.message}
						</ErrorMessage>
					)}
				</Fieldset>

				<Checkbox>
					<input
						type='checkbox'
						{...register('termos')}
					/>
					<span>Li e Aceito os termos</span>
					{errors.termos && (
						<ErrorMessage>{errors.termos.message}</ErrorMessage>
					)}
				</Checkbox>

				<Button type='submit' width='50%'>
					Avançar
				</Button>
			</Formulario>
		</>
	);
}
