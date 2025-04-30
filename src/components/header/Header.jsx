import React, { useState } from 'react';
import style from './Header.module.css';
import { FaBuilding, FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={style.header}>
      <div className={style.headerr}>
      <div className={style.headerlogo}>
        <h4 style={{ color: "black", fontSize: "25px" }}>
          <FaBuilding style={{ marginRight: "5px" }} />
          Purple <span style={{ color: "blue" }}>Buzz</span>
        </h4>
      </div>

      
      <div className={style.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <GiHamburgerMenu size={30} />
      </div>

     
      <div className={`${style.headernav} ${isMobileMenuOpen ? style.showMenu : ''}`}>
        <ul className={style.headernavlist}>
          <li className={style.headernavitem}><Link to="/home">Home</Link></li>
          <li className={style.headernavitem}>About</li>
          <li className={style.headernavitem}>Work</li>
          <li className={style.headernavitem}>Pricing</li>
          <li className={style.headernavitem}><Link to="/contact">Contact</Link></li>
        </ul>

        
        <ul className={style.headernaviconlistMobile}>
          <li className={style.headernavicon}><FaRegBell /></li>
          <li className={style.headernavicon}><MdOutlineSettings /></li>
          <li className={style.headernavicon}><FaRegUserCircle /></li>
        </ul>
      </div>

     
      <div className={style.headericons}>
        <ul className={style.headernaviconlistDesktop}>
          <li className={style.headernavicon}><FaRegBell /></li>
          <li className={style.headernavicon}><MdOutlineSettings /></li>
          <li className={style.headernavicon}><FaRegUserCircle /></li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Header;
