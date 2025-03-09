"use client"

import React, { useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'slide1',
            src: 'https://cdn2.bigcommerce.com/server1500/896ef/products/51/images/171/salebanner__97391.1296011434.1280.1280.jpg?c=2',
        },
        {
            id: 'slide2',
            src: 'https://i.ebayimg.com/00/s/NjAxWDE2MDA=/z/ZZQAAOSwvgVjV5BM/$_57.JPG?set_id=880000500F',
        },
    ];

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel w-full my-7">
            <div id={slides[currentSlide].id} className="carousel-item relative w-full">
                <img
                    src={slides[currentSlide].src}
                    className="w-full h-64"
                    alt={`Slide ${currentSlide + 1}`}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={goToPreviousSlide} className="btn btn-circle">
                        ❮
                    </button>
                    <button onClick={goToNextSlide} className="btn btn-circle">
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;