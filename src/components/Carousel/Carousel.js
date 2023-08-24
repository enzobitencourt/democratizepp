import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CustomCarousel.css';
import Object from '../../Cards/ObjectCarousel/Object';

const CustomCarousel = () => {
    return (
        <>
            <div className="carousel-wrapper">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    transitionTime={500}
                >
                    <div className="carousel-slide">
                        <h2>Slide 1</h2>
                        <p>Conteúdo do slide 1</p>
                    </div>
                    <div className="carousel-slide">
                        <h2>Slide 2</h2>
                        <p>Conteúdo do slide 2</p>
                    </div>
                    <div className="carousel-slide">
                        <h2>Slide 3</h2>
                        <p>Conteúdo do slide 3</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default CustomCarousel;
