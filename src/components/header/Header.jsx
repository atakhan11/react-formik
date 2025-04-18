import React from 'react'
import style from './Header.module.css'
import { FaBuilding } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className={style.header}> 
        <div className={style.headerlogo}>
        
            <h4 style={{color: "black",fontSize: "25px"}}>
            <FaBuilding  style={{marginRight: "5px"}}/>
                Purple
             <span style={{color: "blue",}}> Buzz</span>   
            </h4>
        </div>
        <div className={style.headernav}>
            <ul className={style.headernavlist}>
                <li className={style.headernavitem}>Home</li>
                <li className={style.headernavitem}>About</li>
                <li className={style.headernavitem}>Work</li>
                <li className={style.headernavitem}>Pricing</li>
                <li className={style.headernavitem}>Contact</li>
                
       
            </ul>  
        </div>

        <div >
            <ul className={style.headernaviconlist}>
                <li className={style.headernavicon}><FaRegBell /></li>
                <li className={style.headernavicon}><MdOutlineSettings /></li>
                <li className={style.headernavicon}><FaRegUserCircle /></li>
            </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Header
