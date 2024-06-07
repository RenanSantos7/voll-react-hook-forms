import { useForm } from 'react-hook-form'
import { Button } from '../../components'
import { Checkbox, Fieldset, Form, Input, Label, Titulo } from '../../components/styles'
import { useDataContext } from '../../contexts/DataContext'
import { validarEmail } from '../../utils/validacaoes'

interface FormTipos {
	nome: string
	email: string
	telefone: string
	senha: string
	senhaVerificada: string
	termos: boolean
}

export default function CadastroPessoal () {
	const { register, handleSubmit } = useForm<FormTipos>()
	const { cadastrarCliente } = useDataContext()

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
							required: true,
							minLength: 5
						})}
					/>
				</Fieldset>

				<Fieldset>
					<Label>Email</Label>
					<Input
						placeholder='Insira seu endereço de email'
						type='email'
						{...register('email', {
							required: true,
							validate: validarEmail
						})}
					/>
				</Fieldset>

				<Fieldset>
					<Label>Telefone</Label>
					<Input
						placeholder='Ex: (DD) XXXXX-XXXX'
						{...register('telefone', {
							required: true,
							pattern: /^\d{2}9?\d{8}$/
						})}
					/>
				</Fieldset>

				<Fieldset>
					<Label>Senha</Label>
					<Input
						placeholder='Crie uma senha'
						type='password'
						{...register('senha', {
							required: true,
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_¬;\.])$/
						})}
					/>
				</Fieldset>

				<Fieldset>
					<Label>Repita a senha</Label>
					<Input
						placeholder='Repita a senha anterior'
						type='password'
						{...register('senhaVerificada')}
						/>
				</Fieldset>

				<Checkbox>
					<input 
						type='checkbox'
						{...register('termos')}
					/>
					<span>Li e Aceito os termos</span>
				</Checkbox>

				<Button type='submit'>Avançar</Button>
			</Form>
		</>
	)
}
