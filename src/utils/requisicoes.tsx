import {END_POINT} from '../constants'

/**
 * Realiza requisição do tipo GET
 * @param data o nome do subdomínio no endPoint
 * @param setData o setter do estado que vai receber os dados
 */
export async function getData<T>(data: string, setData: React.Dispatch<React.SetStateAction<T>>) {
	try {
		const resposta = await fetch(`${END_POINT}/${data}`)
		if (resposta.ok) {
			const dados = await resposta.json()
			setData(dados)
		} else {
			throw new Error(`Erro na requisição de ${data}: ${resposta.status} ${resposta.statusText}`)
		}
	} catch (error) {
		console.error(`Erro ao buscar ${data}:`, error)
	}
}

/**
 * Realiza requisição do tipo POST
 * @param data o nome do subdomínio no endPoint
 * @param obj os dados a serem salvos
 */
export async function postData(data: string, obj: any) {
	try {
		const opcoes = {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(obj),
		}
		const resposta = await fetch(`${END_POINT}/${data}`, opcoes)

		if (resposta.ok) {
			console.log('Dados enviados ao servidor com sucesso')
		} else {
			console.error('Erro ao enviar dados:', resposta.statusText)
		}
	} catch (error) {
		console.error('Erro na requisição:', error)
	}
}
