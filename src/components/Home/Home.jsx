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
              <p className="info-me">As an experienced software engineer, I've spent a solid year refining my skills as a Website Tester. My education in Computer Engineering Technology from Humber College has equipped me with a strong foundation. I'm proficient in C, Java, and navigating Linux OS, and I've worked on interesting projects such as Arduino tinkering and crafting Android applications.<br/><br/>

              I'm currently seeking a new opportunity in the tech field where I can leverage my innovative mindset, problem-solving abilities, and solid software engineering background. I thrive on adapting to new challenges and am constantly seeking opportunities for personal and professional growth. If you're looking for someone to bring impactful solutions and a touch of tech wizardry to your team, I'm ready to jump in and make a difference.
              </p>
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