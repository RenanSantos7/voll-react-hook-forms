import { useForm } from 'react-hook-form'
import { Button, Fieldset, Form, Input, Label, Titulo } from '../../components'
import Campo from '../../components/Campo/Campo'
import Checagem from '../../components/Checagem/Checagem'
import { useDataContext } from '../../contexts/DataContext'

interface FormTipos {
	nome: string
	email: string
	telefone: string
	senha: string
	senhaVerificada: string
	termos: boolean
}

const checkbox = {
    alignSelf: 'flex-end',
    display: 'flex',
    gap: '1ch',
    color: '#505050'
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
							pattern: /^[A-z0-9_%-.]+@\w+\.[A-z.]{2,}$/
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

				<label style={checkbox}>
					<input 
						type='checkbox'
						{...register('termos')}
					/>
					<span>Li e Aceito os termos</span>
				</label>

				<Button type='submit'>Avançar</Button>
			</Form>
		</>
	)
}
