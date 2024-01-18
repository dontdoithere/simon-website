import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills';

function App() {
  return ( 
    <>
    <Navbar />
    <div className="container">
     <Home />
     <Skills />
    </div>
    </>
  );
};

export default App