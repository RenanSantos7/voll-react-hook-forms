import { useForm } from 'react-hook-form'
import { Button, Form, Titulo } from '../../components'
import Campo from '../../components/Campo/Campo'

const CadastroPessoal = () => {
	const { register, handleSubmit } = useForm()

	return (
		<>
			<Titulo>Insira alguns dados básicos:</Titulo>
			<Form>
				<Campo
					label='Nome'
					placeholder='Digite seu nome completo'
					{...register('nome')}
				/>

				<Campo
					label='Email'
					placeholder='Insira seu endereço de email'
					type='email'
					{...register('email')}
				/>

				<Campo
					label='Telefone'
					type='text'
					placeholder='Ex: (DDD) XXXXX-XXXX'
					{...register('telefone')}
				/>

				<Campo
					label='Crie uma senha'
					placeholder='Crie uma senha'
					type='password'
					{...register('senha')}
				/>

				<Campo
					label='Repita a senha'
					placeholder='Repita a senha anterior'
					type='password'
					{...register('senhaVerificada')}
				/>

				<Button type='submit'>Avançar</Button>
			</Form>
		</>
	)
}

export default CadastroPessoal
