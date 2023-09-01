import { BrowserRouter, Route, Routes } from "react-router-dom"
import Entrada from "../Pages/Entrance/Entrance"
import Home from "../Pages/Home/Home"
import Projeto from "../Pages/Projeto/Projeto"
import Configuracoes from "../Pages/Configuracoes/Configuracoes"
import PrincipalDeps from "../Pages/Deps&Sens/principal"
import PageVoto from "../Pages/Voto/Voto"
import Login from "../Pages/Login/Login"
import Cadastro from "../Pages/Cadastro/Cadastro"
import AgoraDeps from "../Pages/AgoraDeps/AgoraDeps"
import AgoraSens from "../Pages/AgoraSens/AgoraSens"
import FrenteComs from "../Pages/FrenteComs/FrenteComs"
import ProjetoeVotac from "../Pages/ProjetoseVotac/ProjetoeVotac"
import Perfil from "../Pages/Perfil/Perfil"
import ExcluirConta from "../Pages/ExcluirConta/ExcluirConta"
import Erro from "../Pages/Erro/Erro"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Entrada/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="projeto" element={<Projeto/>}/>
                <Route path="config" element={<Configuracoes/>}/>
                <Route path="agoraembrasilia" element={<PrincipalDeps/>}/>
                <Route path="eleicoes" element={<PageVoto/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="agoranacamara" element={<AgoraDeps/>}/>
                <Route path="agoranosenado" element={<AgoraSens/>}/>
                <Route path="frentes" element={<FrenteComs/>}/>
                <Route path="votacoes" element={<ProjetoeVotac/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="entrada" element={<Entrada/>}/>
                <Route path="excluirconta" element={<ExcluirConta/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas