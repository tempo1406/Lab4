import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="./assets/pizza1.jpg" className="d-block w-100" alt="Neapolitan Pizza" />
                <Carousel.Caption>
                    <h5>Neapolitan Pizza</h5>
                    <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./assets/pizza2.jpg" className="d-block w-100" alt="Mushroom Pizza" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="./assets/pizza3.jpg" className="d-block w-100" alt="Hawaiian Pizza" />
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
        </Carousel>
    );
};

export default CarouselComponent;
