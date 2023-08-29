import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Object from '../../Cards/ObjectCarousel/Object'

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

const CustomCarousel = () => {
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
            <Object/>
      </div>
      <div className="slide">
            <Object/>
      </div>
      <div className="slide">
            <Object/>
      </div>

    </StyledCarousel>
  );
};

export default CustomCarousel;
