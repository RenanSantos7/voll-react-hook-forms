import styled from 'styled-components'
import backgroundImage from './ImagemDeFundo.png'

const StyledContainer = styled.main`
	background-image: url(${backgroundImage});
	background-size: cover;
	position: fixed;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Scroll = styled.div`
	overflow: auto;
	scroll-behavior: smooth;
	scroll-snap-type: block;
	scroll-snap-align: center;
	padding-block: 2rem;
	/* border: 1px solid red; */
	scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0;
	}
`

const StyledContent = styled.div`
	background-color: white;
	width: max(50vw, 600px);
	height: max-content;
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
`

function PaginaBaseFormulario({ children }: { children: React.ReactNode }) {
	return (
		<StyledContainer>
			<Scroll>
				<StyledContent>{children}</StyledContent>
			</Scroll>
		</StyledContainer>
	)
}

export default PaginaBaseFormulario
''