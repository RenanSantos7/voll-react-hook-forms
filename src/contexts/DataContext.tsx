import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { getData, postData } from '../utils/requisicoes';
import { ICliente } from '../types/types';

interface IDataContext {
	clientes: ICliente[];
	cadastrarCliente: (obj: Omit<ICliente, 'id'>) => void;
	loading: boolean;
	modalMsg: string;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(true);
	const [clientes, setClientes] = useState<ICliente[]>([]);
	const [modalMsg, setModalMsg] = useState('');

	function cadastrarCliente(obj: Omit<ICliente, 'id'>) {
		if (clientes.some(cliente => cliente.nome === obj.nome)) {
			setModalMsg('Já existe um cliente com esse nome.');
			console.log(modalMsg);
		} else if (clientes.some(cliente => cliente.email === obj.email)) {
			setModalMsg('Já existe um cliente com esse e-mail.');
			console.log(modalMsg);
		} else {
			const ids = clientes.map(cliente => cliente.id);
			const proxId = ids.reduce((a, b) => Math.max(a, b), 0) + 1;
			const novoCliente = { id: proxId, ...obj };
			postData('clientes', novoCliente);
		}
	}

	useEffect(() => {
		try {
			getData('clientes', setClientes);
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<DataContext.Provider value={{
			clientes,
			cadastrarCliente,
			loading,
			modalMsg
		}}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
