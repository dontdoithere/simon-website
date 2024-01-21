import React, { useRef } from 'react';
import './Experience.css';
import { EXPERIENCE, SKILLS } from '../../Utils/Data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const Experience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const sliderRight = () =>{
        sliderRef.current.slickNext();
    };

    const sliderLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <>
            <section className="experience-container">
                <h5>My experience</h5>

                <div className="experience-content">

                    <div className="arrow-right" onClick={sliderRight}>
                        <span className="material-symbols-outlined">&rarr;</span>
                    </div>

                    <div className="arrow-left" onClick={sliderLeft}>
                        <span className="material-symbols-outlined">&larr;</span>
                    </div>
                    
                    <Slider ref={sliderRef} {...settings}>
                        {EXPERIENCE.map((item) => (
                            <ExperienceCard key={item.title} details={item} />
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Experience;
