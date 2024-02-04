import React, { useState, useEffect } from 'react';
import myPic from "../../assets/picMe.jpg"
import './Home.css'
import { QUOTES } from '../../Utils/Data'; 
import Slider from 'react-slick';


function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
  };

  
  return (
    <section id="home" className="home-container">
        <div className="home-content">
          <div className="name-pic-container">
           <div className="name-intro">
              <h1>Simon Diakonov</h1>
              <p className="info-me">Experienced software engineer with a
                                    year Website Tester background and
                                    Humber College's Computer Engineering
                                    Technology education. Proficient in C,
                                    Java, Linux OS, and diverse projects
                                    including Arduino and Android
                                    applications. Seeking a dynamic tech role
                                    to contribute innovation, problem-solving,
                                    and a strong foundation in software
                                    engineering to your team. With a proven
                                    ability to adapt and a passion for
                                    continuous growth, I am poised to drive
                                    impactful solutions.</p>
           </div>
           <img src={myPic} className="my-pic" alt="myPic" />
          </div>

          <div className="quote-container">
             <h3>Favourite quotes</h3>
              <div className="quote-p">
                <Slider {...settings}>
                  {QUOTES.map((quote, index) => (
                    <div key={index} className="quote-slide">
                      <p className="quote">{quote.text}</p>
                      <p className="quote-author">{quote.author}</p>
                    </div>
                 ))}
                </Slider>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Home