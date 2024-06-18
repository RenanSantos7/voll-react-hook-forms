export interface ICliente {
	id: number;
	nome: string;
	email: string;
	telefone: string;
	senha: string;
	endereco?: IEndereco;
}

export interface IEndereco {
	cep: string;
	rua: string;
	numero: string;
	bairro: string;
	localidade: string;
}