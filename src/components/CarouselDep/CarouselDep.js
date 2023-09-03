import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Object from '../../Cards/ObjectCarousel/Object'
import congresso from '../../Assets/congresso.png'
import teste from '../../Assets/testepolitic.png'
import conceito from '../../Assets/oqepolitic.jpg'
import camara from '../../Assets/camara.png'
import senado from '../../Assets/senado.png'

const StyledCarousel = styled(Carousel)`
  .carousel-slider {
    max-width: 100vw; /* Largura máxima dos slides */
    margin: 0 auto;
  }

  .slide {
    display: flex;
    margin-top: -1vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #f5f5f5;
    box-sizing: border-box;
    height: 28vh;
  }

  .control-dots {
    display: flex;
    justify-content: center;
    
    .dot {
      background-color: #BFBFBF;
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }

    .dot.selected {
      background-color: #F0AD4E;
      width: 21.29px;
      border-radius: 23.104px;
    }
  }
`;

const CustomCarouselDep = () => {
  return (
    <StyledCarousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={true}
      infiniteLoop={true}
      transitionTime={500}
      autoPlay={true} // Enable auto-rotation
      interval={3000} // Set the interval (3 seconds in this example)

    >
      <div className="slide">
        <Object imagem={conceito} texto='O que é política?' link='https://youtu.be/lcdqEIPalbM' />
      </div>

      <div className="slide">
        <Object imagem={teste} link='https://www.idrlabs.com/pt/coordenadas-politicas/teste.php' texto='Descubra sua posição no espectro político' />
      </div>

      <div className="slide">
        <Object imagem={congresso} texto='Acesse o site oficial do Congresso Nacional!' link='https://www.congressonacional.leg.br/' />
      </div>

      <div className="slide">
        <Object imagem={camara} texto='Acesse o site oficial da Câmera dos Deputados!' link='https://www.camara.leg.br/' />
      </div>

      <div className="slide">
        <Object imagem={senado} texto='Acesse o site oficial do Senado Federal!' link='https://www12.senado.leg.br/hpsenado' />
      </div>

    </StyledCarousel>
  );
};

export default CustomCarouselDep;
