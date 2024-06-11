import { useEffect, useState } from 'react';
import { useDataContext } from '../../contexts/DataContext';
import styled from 'styled-components';
import { Titulo } from '../styles';
import Button from '../Button/Button';

const Sombra = styled.div`
	position: absolute;
	inset: 0;
	background-color: hsla(0, 0%, 0%, 35%);
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

const ModalContainer = styled.div`
	position: relative;
	z-index: 2;
	background-color: white;
	width: max(50vw, 600px);
	height: max-content;
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
`;

const Texto = styled.p`
	font-weight: 300;
`;

export default function Modal() {
	const { modalMsg } = useDataContext();
	const [isOpen, setIsOpen] = useState(!!modalMsg);

	useEffect(() => {
		if (!!modalMsg) {
			setIsOpen(true);
		}
	}, [modalMsg]);

	if (isOpen) {
		return (
			<Sombra>
				<ModalContainer>
					<Titulo>Erro</Titulo>
					<Texto>{modalMsg}</Texto>
					<Button onClick={() => setIsOpen(false)}>Ok</Button>
				</ModalContainer>
			</Sombra>
		);
	} else {
		return null;
	}
}
