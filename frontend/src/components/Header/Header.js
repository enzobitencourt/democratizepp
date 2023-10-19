import { useNavigate } from "react-router-dom";
import { Container, Nome, TituloContainer, Texto, PerfilContainer, Perfil } from "./styled";
import perfil from "../../Assets/perfil_semconta.png";

function Header(props) {
  const navigate = useNavigate();
  const user = props.user;

  const goToOnde = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      navigate('/config');
    }
  }

  return (
    <Container>
      <TituloContainer>
        <Texto>Olá,</Texto>
        <Nome>{user ? user.nome : "Cidadã(o)"}</Nome>
      </TituloContainer>
      <PerfilContainer>
        <Perfil imagem={perfil} onClick={goToOnde} />
      </PerfilContainer>
    </Container>
  );
}

export default Header;
