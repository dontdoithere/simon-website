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

    <nav className="nav-wrapper">
        <div className="nav-content">
            <ul>
                <li>
                    <a className="menu-item"> Home </a>
                </li>
                <li>
                    <a className="menu-item"> Skill </a>
                </li>
                <li>
                    <a className="menu-item"> Projects </a>
                </li>
                <li>
                    <a className="menu-item"> ContactMe </a>
                </li>
            </ul>


            <button class="menu-btn" onClick={toggleMenu}>
            <List size={32} color="black" />
            {openMenu ? "" : ""}
            </button>
        </div>
    </nav>
  </>
  );
};

export default Navbar