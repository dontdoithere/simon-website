import React, { useState } from 'react'
import './Navbar.css'
import { List } from 'phosphor-react';
import MobileNavbar from './MobileNavbar/MobileNavbar';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


  return (
    <>
    <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

    <div className="nav-wrapper">
        <nav className="nav-content">
            <ul>
                <li>
                    <a className="menu-item" href="#home"> Home </a>
                </li>
                <li>
                    <a className="menu-item" href="#skills"> Skill </a>
                </li>
                <li>
                    <a className="menu-item" href="#experience"> Projects </a>
                </li>
                <li>
                    <a className="menu-item" href="#contact"> ContactMe </a>
                </li>
            </ul>


            <button class="menu-btn" onClick={toggleMenu}>
            <List size={32} color="black" />
            {openMenu ? "" : ""}
            </button>
        </nav>
    </div>
  </>
  );
};

export default Navbar