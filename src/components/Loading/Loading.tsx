import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';

const Sombra = styled.div`
	position: fixed;
	inset: 0;
	background-color: hsla(209, 20%, 50%, 45%);
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Girando = styled.div`
	@keyframes girando {
		from {
			rotate: 0;
		}
		to {
			rotate: 365deg;
		}
	}

	width: 80px;
	height: 80px;
	border: 12px solid white;
	border-right-color: transparent;
	border-radius: 50%;
	animation: girando 0.5s linear infinite;
`;

export default function Loading() {
	const { loading } = useDataContext();

	if (loading)
		return (
			<Sombra>
				<Girando />
			</Sombra>
		);
	else return null;
}
