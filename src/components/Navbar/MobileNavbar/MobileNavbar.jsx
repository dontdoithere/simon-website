import React from 'react'
import './MobileNavbar.css'

const  MobileNavbar = ({isOpen, toggleMenu }) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
         onClick={toggleMenu}>
    

     <div className="mobile-menu-container">    
        <ul>
            <li>
                <a className="menu-item">Home</a>
            </li>
            <li>
                <a className="menu-item">Skills</a>
            </li>
            <li>
                <a className="menu-item">Projetcs</a>
            </li>
            <li>    
                <a className="menu-item">Contact Me</a> 
            </li>
        </ul>
     </div>
    </div>
    </>
  );
};

export default MobileNavbar