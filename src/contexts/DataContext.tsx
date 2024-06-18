import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { getData, patchData, postData } from '../utils/requisicoes';
import { ICliente } from '../types/types';

interface IDataContext {
	clientes: ICliente[];
	setClientes: React.Dispatch<SetStateAction<ICliente[]>>;
	loading: boolean;
	setLoading: React.Dispatch<SetStateAction<boolean>>;
	modalMsg: string;
	setModalMsg: React.Dispatch<SetStateAction<string>>;
	clienteCriado: ICliente;
	setClienteCriado: React.Dispatch<SetStateAction<ICliente>>;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(true);
	const [clientes, setClientes] = useState<ICliente[]>([]);
	const [clienteCriado, setClienteCriado] = useState(null);
	const [clienteFoiAlterado, setClienteAlterado] = useState(false);
	const [modalMsg, setModalMsg] = useState('');

	let novoCliente: ICliente;

	function alterarCliente(cliente: ICliente) {
		patchData('clientes', cliente)
	}

	useEffect(() => {
		try {
			getData('clientes', setClientes);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (clienteCriado !== null) {
			console.log(clienteCriado)
			setClienteAlterado(true)
		}
	}, [clienteCriado]);

	useEffect(() => {
		if(clienteCriado !== null && clienteFoiAlterado) {
			alterarCliente(clienteCriado)
		}
	}, [clienteCriado, clienteFoiAlterado]);

	return (
		<DataContext.Provider
			value={{
				clientes, setClientes,
				loading, setLoading,
				clienteCriado, setClienteCriado,
				modalMsg, setModalMsg
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
