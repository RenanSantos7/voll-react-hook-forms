import { useForm } from 'react-hook-form'
import { Button, Form, Titulo } from '../../components'
import Campo from '../../components/Campo/Campo'
import Checagem from '../../components/Checagem/Checagem'
import { useDataContext } from '../../contexts/DataContext'

interface FormTipos {
    nome: string
    email: string
    telefone: string
    senha: string
    senhaVerificada: string
}

const CadastroPessoal = () => {
	const { register, handleSubmit } = useForm<FormTipos>()
	const { cadastrarCliente } = useDataContext()

	function aoSubmeter(dados: FormTipos) {
		const novoCliente = {
			nome: dados.nome,
			email: dados.email,
			telefone: dados.telefone,
			senha: dados.senha,
		}
		cadastrarCliente(novoCliente)
	}

	return (
		<>
			<Titulo>Insira alguns dados básicos:</Titulo>
			<Form onSubmit={handleSubmit(aoSubmeter)}>
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

				<Checagem label='Li e concordo com os termos de uso' required />

				<Button type='submit'>Avançar</Button>
			</Form>
		</>
	)
}

export default CadastroPessoal
