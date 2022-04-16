import React, {useState} from 'react';
import {SiHomebridge} from 'react-icons/si';
import {FaChessPawn} from 'react-icons/fa';
import {FaChessRook} from 'react-icons/fa';
import {FaChessKnight} from 'react-icons/fa';
import {FaChessBishop} from 'react-icons/fa';






import './styles/Navbar.css';

function Navbar() {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active':''}><SiHomebridge/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FaChessPawn/></a>
        <a href='#main' onClick={() => setActiveNav('#main')} className={activeNav === '#main' ? 'active':''}><FaChessRook/></a>
        <a href='#blog' onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active':''}><FaChessKnight/></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><FaChessBishop/></a>

    </nav>
  )
}

export default Navbar