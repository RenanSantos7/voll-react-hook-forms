import { Outlet } from 'react-router-dom'
import Modal from '../../components/Modal/Modal';
import {
	Scroll,
	StyledContainer,
	StyledContent,
} from './PaginaBaseFormularioStyles';

export default function PaginaBaseFormulario() {
	return (
		<>
			<StyledContainer>
				<Scroll>
					<StyledContent>
						<Outlet />
					</StyledContent>
				</Scroll>
			</StyledContainer>
			<Modal />
		</>
	);
}
