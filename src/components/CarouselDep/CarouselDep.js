import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Object from '../../Cards/ObjectCarousel/Object'
import imagem from '../../Assets/img_not.png'
import imagem1 from '../../Assets/notícia_carrossel.jpg'

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
    >
      <div className="slide">
            <Object imagem={imagem} texto='Governo anuncia bloqueio de R$ 5,7 bilhões do Orçamento de 2022'/>
      </div>
      <div className="slide">
            <Object imagem={imagem1} texto='Para Lira, problemas orçamentários impedem mais investimentos na defesa do meio ambiente'/>
      </div>
      <div className="slide">
            <Object imagem={imagem} texto='Governo anuncia bloqueio de R$ 5,7 bilhões do Orçamento de 2022'/>
      </div>

    </StyledCarousel>
  );
};

export default CustomCarouselDep;
