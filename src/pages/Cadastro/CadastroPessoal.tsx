import { useForm } from 'react-hook-form'
import { Button } from '../../components'
import {
	Checkbox,
	ErrorMessage,
	Fieldset,
	Form,
	Input,
	Label,
	Titulo,
} from '../../components/styles'
import { useDataContext } from '../../contexts/DataContext'
import {
	validaRepetSenha,
	validarEmail,
	validarSenha,
} from '../../utils/validacaoes'

interface FormTipos {
	nome: string
	email: string
	telefone: string
	senha: string
	senhaVerificada: string
	termos: boolean
}

export default function CadastroPessoal() {
	const {
		formState: { errors },
		handleSubmit,
		register,
		watch,
	} = useForm<FormTipos>()
	const { cadastrarCliente } = useDataContext()

	const senha = watch('senha')

	function aoSubmeter(data: FormTipos) {
		const novoCliente = {
			nome: data.nome,
			email: data.email,
			telefone: data.telefone,
			senha: data.senha,
		}
		console.log(novoCliente)
		cadastrarCliente(novoCliente)
	}

	return (
		<>
			<Titulo>Insira alguns dados básicos:</Titulo>
			<Form onSubmit={handleSubmit(aoSubmeter)}>
				<Fieldset>
					<Label>Nome</Label>
					<Input
						placeholder='Digite seu nome completo'
						{...register('nome', {
							required: 'A gente precisa do seu nome',
							minLength: {
								value: 5,
								message:
									'O nome precisa ter pelo menos 5 caracteres',
							},
						})}
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
						{...register('email', {
							required: 'Você precisa fornecer seu email.',
							validate: validarEmail,
						})}
						$error={!!errors.email}
					/>
					{errors.email && (
						<ErrorMessage>{errors.email.message}</ErrorMessage>
					)}
				</Fieldset>

				<Fieldset>
					<Label>Telefone</Label>
					<Input
						placeholder='Ex: (DD) XXXXX-XXXX'
						{...register('telefone', {
							required: 'Você precisa fornecer seu telefone',
							pattern: {
								value: /^\d{2}9?\d{8}$/,
								message: `Tem certeza que seu telefone está correto?
									O sistema tá dizendo que esse formato é inválido. 🤖`,
							},
						})}
						$error={!!errors.telefone}
					/>
					{errors.telefone && (
						<ErrorMessage>{errors.telefone.message}</ErrorMessage>
					)}
				</Fieldset>

				<Fieldset>
					<Label>Senha</Label>
					<Input
						placeholder='Crie uma senha'
						type='password'
						autoComplete='new-password'
						{...register('senha', {
							required: 'Cadê a sua senha?',
							minLength: {
								value: 8,
								message:
									'Sua senha tem que ter pelo menos 8 dígitos',
							},
							validate: validarSenha,
						})}
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
						{...register('senhaVerificada', {
							required: 'Você não repetiu sua senha',
							validate: valor => validaRepetSenha(valor, senha),
						})}
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
						{...register('termos', {
							required: 'Poxa, você precisa aceitar os termos...',
						})}
					/>
					<span>Li e Aceito os termos</span>
					{errors.termos && (
						<ErrorMessage>{errors.termos.message}</ErrorMessage>
					)}
				</Checkbox>

				<Button type='submit'>Avançar</Button>
			</Form>
		</>
	)
}
