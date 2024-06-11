export function validarEmail(valor: string): boolean {
	const formatoEmail = /\w{2,}@alura.com.br/;
	if (!formatoEmail.test(valor)) {
		console.error('Endereço de email inválido para este domínio');
		return false;
	}
	return true;
}

export function validarSenha(valor: string): boolean {
	const formatoSenha =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_\-¬;.]).*$/;
	if (!formatoSenha.test(valor)) {
		console.error(
			'Sua senha precisa ser segura. Ela deve conter letras minúsculas, maiúsculas, números e pelo menos um desses caracteres especiais: ! @ # $ % ^ & * - _ ¬ ; .',
		);
		return false;
	}
	return true;
}

export function validaRepetSenha(valor: string, senha: string) {
	return valor === senha || 'As senhas não conferem';
}
