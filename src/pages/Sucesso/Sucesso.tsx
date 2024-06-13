import { Button } from '../../components';
import { Titulo } from '../../components/styles';
import Texto from '../../components/styles/Texto';
import Banner from './Banner';

export default function Sucesso() {
	return (
		<>
			<Titulo>Muito Obrigado!</Titulo>
			<Banner width='60%' />
			<Texto bold>Seu cadastro foi realizado com sucesso!</Texto>
			<Texto>Gostaríamos de lhe dar as boas vindas ao grupo Voll Médica!. Aqui você terá acesso ao que há de melhor para o seu tratamento.</Texto>
			<Button>Voltar para o Início</Button>
		</>
	);
}
