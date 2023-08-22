import { BrowserRouter, Route, Routes } from "react-router-dom"
import Entrada from "../Pages/Entrance/Entrance"
import Login from "../Pages/Login/Login"
import Cadastro from "../Pages/Cadastro/Cadastro"
import AgoraDeps from "../Pages/AgoraDeps/AgoraDeps"
import AgoraSens from "../Pages/AgoraSens/AgoraSens"
import FrenteComs from "../Pages/FrenteComs/FrenteComs"
import ProjetoeVotac from "../Pages/ProjetoseVotac/ProjetoeVotac"
import Principal from "../Pages/Principal/Principal"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Entrada/>}/>
                <Route path='principal' element={<Principal/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="agoranacamara" element={<AgoraDeps/>}/>
                <Route path="agoranosenado" element={<AgoraSens/>}/>
                <Route path="frentes" element={<FrenteComs/>}/>
                <Route path="votacoes" element={<ProjetoeVotac/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas