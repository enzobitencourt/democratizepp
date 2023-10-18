import { useNavigate } from "react-router-dom";
import { Container, Nome, TituloContainer, Texto, PerfilContainer, Perfil } from "./styled";
import perfil from "../../Assets/perfil_semconta.png";
import { useEffect, useState } from "react";

function Header(props) {
  const navigate = useNavigate();
  const user = props.user;
  const [imagemUrl, setImagemUrl] = useState(null);

  const goToOnde = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      navigate('/config');
    }
  }

  const convertBufferToImage = (imagemBuffer) => {
    if (imagemBuffer && imagemBuffer.data && imagemBuffer.data.length > 0) {
      try {
        const blob = new Blob([new Uint8Array(imagemBuffer.data)], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        return url;
      } catch (error) {
        console.error("Erro ao converter imagem:", error);
      }
    }
    return null; 
  };

  useEffect(() => {
    if (user) {
      if (imagemUrl === null) {
        const imagemUrlNova = convertBufferToImage(user.imagem);
        if (imagemUrlNova) {
          console.log("Nova imagem URL:", imagemUrlNova);
          setImagemUrl(imagemUrlNova);
        }
      }
    }
  }, [user, setImagemUrl, imagemUrl]);

  return (
    <Container>
      <TituloContainer>
        <Texto>Olá,</Texto>
        <Nome>{user ? user.nome : "Cidadã(o)"}</Nome>
      </TituloContainer>
      <PerfilContainer>
        <Perfil src={imagemUrl ? imagemUrl : perfil} onClick={goToOnde} />
      </PerfilContainer>
    </Container>
  );
}

export default Header;
