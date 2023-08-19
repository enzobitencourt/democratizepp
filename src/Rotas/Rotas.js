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
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas