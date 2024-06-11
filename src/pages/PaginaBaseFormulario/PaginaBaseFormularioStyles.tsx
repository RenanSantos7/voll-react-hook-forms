import styled from 'styled-components';
import backgroundImage from './ImagemDeFundo.png';

export const StyledContainer = styled.main`
	background-image: url(${backgroundImage});
	background-size: cover;
	position: fixed;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Scroll = styled.div`
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
`;

export const StyledContent = styled.div`
	background-color: white;
	width: max(50vw, 600px);
	height: max-content;
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
`;
