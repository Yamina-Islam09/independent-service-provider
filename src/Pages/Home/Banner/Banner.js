import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner1.JPG';
import banner2 from '../../../images/banner2.JPG';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption  style={{color:'black'}}>
                    <h3>Kat's Home catering</h3>
                    <p>Delicious Home Made Healthy Nutritiuos Food </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption  style={{color:'black'}}>
                <h3>Kat's Home catering</h3>
                    <p>Delivery services also offer here in Chittagong</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption  style={{color:'black'}}>
                <h3>Kat's Home catering</h3>
                    <p>
                        You can contact with in facebook page .
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;