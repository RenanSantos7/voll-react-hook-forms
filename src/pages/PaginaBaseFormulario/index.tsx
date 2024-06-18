import { Outlet } from 'react-router-dom'
import Modal from '../../components/Modal/Modal';
import {
	Scroll,
	Fundo,
	Conteudo,
} from './PaginaBaseFormularioStyles';
import { Loading, Logotipo } from '../../components';

export default function PaginaBaseFormulario() {
	return (
		<>
			<Fundo>
				<Scroll>
					<Conteudo>
						<Logotipo />
						<Outlet />
					</Conteudo>
				</Scroll>
			</Fundo>
			
			<Modal />
			<Loading />
		</>
	);
}
