import { API_URL } from '../constants';
import { ehObjeto, ehObjetoVazio } from './validaObj';

/**
 * Realiza requisição do tipo GET
 * @param endPoint o nome do subdomínio no endPoint
 * @param setData o setter do estado que vai receber os dados
 */
export async function getData<T>(
	endPoint: string,
	setData: React.Dispatch<React.SetStateAction<T>>,
) {
	try {
		const resposta = await fetch(`${API_URL}/${endPoint}`);
		if (resposta.ok) {
			const dados = await resposta.json();
			setData(dados);
		} else {
			throw new Error(
				`Erro na requisição de ${endPoint}: ${resposta.status} ${resposta.statusText}`,
			);
		}
	} catch (error) {
		console.error(`Erro ao buscar ${endPoint}:`, error);
	}
}

/**
 * Realiza requisição do tipo POST
 * @param endPoint o nome do subdomínio no endPoint
 * @param data os dados a serem salvos
 */
export async function postData(endPoint: string, data: any) {
	if (ehObjetoVazio(data) || !ehObjeto(data)) {
		console.error(
			'Não foi possível fazer a requisção pois o objeto fornecido está vazio',
		);
		return;
	}

	try {
		const opcoes = {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		};
		const resposta = await fetch(`${API_URL}/${endPoint}`, opcoes);

		if (resposta.ok) {
			console.log('Dados enviados ao servidor com sucesso');
		} else {
			console.error('Erro ao enviar dados:', resposta.statusText);
		}
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}

/**
 * Realiza requisição do tipo PATCH
 * @param endPoint o nome do subdomínio no endPoint
 * @param data os dados a serem salvos
 */
export async function patchData(endPoint: string, data: any) {
	if (ehObjetoVazio(data) || !ehObjeto(data)) {
		console.error(
			'Não foi possível fazer a requisção pois o objeto fornecido está vazio ou não é um objeto',
		);
		return;
	}
	try {
		const opcoes = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};
		const resposta = await fetch(`${API_URL}/${endPoint}`, opcoes);

		if (!resposta.ok) {
			throw new Error('Erro ao alterar cliente');
		}
		console.log('Cliente alterado:');
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}
