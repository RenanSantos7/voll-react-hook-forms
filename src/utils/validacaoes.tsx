export function validarEmail(valor: string) {
	const formatoEmail = /\w{2,}@alura.com.br/
	if (!formatoEmail.test(valor)) {
		console.error('Endereço de email inválido para este domínio')
		return false
	}
}
