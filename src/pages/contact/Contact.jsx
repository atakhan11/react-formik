import React from 'react'
import style from './Contact.module.css'
import { FaNewspaper } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import Form from '../../components/form/Form';

const Contact = () => {
  return (
    <div >
      <div className={style.contact}>
            <div className={style.des}>
                <h1>Contact</h1>
                <h3>Elit, sed do eiusmod tempor</h3>
                <p>Vector illustration is from StorySet. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className={style.img}>
                <img src="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/banner-img-01.svg" alt="" />
            </div>
      </div>

      <div className={style.form}>
        <div className={style.formDes}>
                <h1>Create success campaign with us!</h1>
                <h3>Elit, sed do eiusmod tempor</h3>
                <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>

            <div className={style.formContainer}>
              <div className={style.formContainer1}>
                <div className={style.c}>
                  <div className={style.icon}><FaNewspaper /></div>
                  <ul className={style.contactinfo}>
                        <li className={style.i}>Media Contact</li>
                        <li className={style.i}>Mr. John Doe</li>
                        <li className={style.i}>010-020-0340</li>
                    </ul>
                </div>
                <div className={style.c}>
                  <div className={style.icon}><MdOutlineComputer /></div>
                  <ul className={style.contactinfo}>
                        <li className={style.i}>Media Contact</li>
                        <li className={style.i}>Mr. John Doe</li>
                        <li className={style.i}>010-020-0340</li>
                    </ul>
                </div>
                <div className={style.c}>
                  <div className={style.icon}><FaMoneyBill /></div>
                  <ul className={style.contactinfo}>
                        <li className={style.i}>Media Contact</li>
                        <li className={style.i}>Mr. John Doe</li>
                        <li className={style.i}>010-020-0340</li>
                    </ul>
                </div>
              </div>
              <div className={style.formContainer2}>
            </div>



            

            </div>
            <Form/>
      </div>
            

    </div>
  )
}

export default Contact
