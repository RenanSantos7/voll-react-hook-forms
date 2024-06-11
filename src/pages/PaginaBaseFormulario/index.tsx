import Modal from '../../components/Modal/Modal'
import { Scroll, StyledContainer, StyledContent } from './PaginaBaseFormularioStyles'

export default function PaginaBaseFormulario({ children }: { children: React.ReactNode }) {
	return (
		<>
			<StyledContainer>
				<Scroll>
					<StyledContent>{children}</StyledContent>
				</Scroll>
			</StyledContainer>
			<Modal />
		</>
	)
}
