import Loading from './components/Loading/Loading'
import DataProvider from './contexts/DataContext'
import Cadastro from './pages/Cadastro'
import PaginaBaseFormulario from './pages/PaginaBaseFormulario'

function App() {
	return (
		<DataProvider>
			<PaginaBaseFormulario>
				<Cadastro />
			</PaginaBaseFormulario>
			<Loading />
		</DataProvider>
	)
}

export default App
