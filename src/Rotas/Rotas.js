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
import axios from "axios";
import { useState, useEffect } from "react"

function Rotas() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    const Database = () => {
        axios
            .get(
                "https://gnews.io/api/v4/top-headlines?category=nation&lang=pt&country=br&max=10&apikey=21a3935b653b57368c81d5828dcc3ce1"
            )
            .then((response) => {
                setNews(response.data.articles);
                setLoading(false); // Define o carregamento como concluído quando os dados são obtidos
            })
            .catch((error) => {
                console.log("error");
                setLoading(true);
            });
    };

    useEffect(() => {
        Database();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Entrada />} />
                <Route path="home" element={<Home database={news} loading={loading} />} />
                <Route path="projeto" element={<Projeto />} />
                <Route path="config" element={<Configuracoes />} />
                <Route path="agoraembrasilia" element={<PrincipalDeps />} />
                <Route path="eleicoes" element={<PageVoto />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="agoranacamara" element={<AgoraDeps />} />
                <Route path="agoranosenado" element={<AgoraSens />} />
                <Route path="frentes" element={<FrenteComs />} />
                <Route path="votacoes" element={<ProjetoeVotac />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path="entrada" element={<Entrada />} />
                <Route path="excluirconta" element={<ExcluirConta />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas