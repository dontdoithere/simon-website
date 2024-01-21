import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return ( 
    <>
    <Navbar />
    <div className="container">
     <Home />
     <Skills />
     <Experience/>
     <ContactMe/>
    </div>
    </>
  );
};

export default App