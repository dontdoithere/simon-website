import React from 'react'
import myPic from '../../assets/picMe.jpg';
import './Home.css'

function Home() {
  return (
    <section className="home-container">
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
          <h3>Favourite quote:</h3>
          <p className="quote-p">"The beauty of programming is not in the bits and bytes, but in the ability to translate innovative ideas into lines of code that empower and transform the digital world, shaping the future in ways we could only dream of."</p>
          </div>
        </div>
    </section>
  )
}

export default Home