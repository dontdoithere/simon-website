import React from 'react'
import './MobileNavbar.css'

const  MobileNavbar = ({isOpen, toggleMenu }) => {
    const handleItemClick = () => {
        // Close the menu when a menu item is clicked
        toggleMenu();
    };

    
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
         onClick={toggleMenu}>
    

     <div className="mobile-menu-container">    
        <ul>
            <li>
                <a className="menu-item" href="#home">Home</a>
            </li>
            <li>
                <a className="menu-item" href="#skills">Skills</a>
            </li>
            <li>
                <a className="menu-item" href="#experience">Projetcs</a>
            </li>
            <li>    
                <a className="menu-item" href="#contact">Contact Me</a> 
            </li>
        </ul>
     </div>
    </div>
    </>
  );
};

export default MobileNavbar