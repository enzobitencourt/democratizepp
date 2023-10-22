import { useNavigate } from "react-router-dom";
import { Container, Nome, TituloContainer, Texto, PerfilContainer, Perfil } from "./styled";
import perfil from "../../Assets/perfil_semconta.png";
import imagem from "../../Assets/login.png";

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

  
  function conversor(byteArray) {
    // Converte o array de bytes em um Uint8Array
    const uint8Array = new Uint8Array(byteArray);

    // Converte o Uint8Array em uma string base64 usando btoa
    let base64String = '';
    for (let i = 0; i < uint8Array.length; i++) {
        base64String += String.fromCharCode(uint8Array[i]);
    }

    return base64String;

}

  return (
    <Container>
      <TituloContainer>
        <Texto>Olá,</Texto>
        <Nome>{user ? user.nome : "Cidadã(o)"}</Nome>
      </TituloContainer>
      <PerfilContainer>
        <Perfil imagem={user !== undefined && user.imagem ?  `data:image/jpeg;base64,${conversor(user.imagem.data)}` : user !== undefined ? imagem : perfil} onClick={goToOnde} />
      </PerfilContainer>
    </Container>
  );
}

export default Header;
