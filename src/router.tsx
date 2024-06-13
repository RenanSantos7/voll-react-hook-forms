import { createBrowserRouter } from "react-router-dom"
import CadastroPessoal from "./pages/Cadastro/CadastroPessoal"
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario"
import CadastroEndereco from "./pages/Cadastro/CadastroEndereco"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PaginaBaseFormulario />,
        children: [
            {
                index: true,
                element: <CadastroPessoal />,
            },
            {
                path: '/endereco',
                element: <CadastroEndereco />
            }
        ],
    }
])

export default router