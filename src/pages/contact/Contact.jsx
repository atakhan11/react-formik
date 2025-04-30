import React from 'react';
import Form from '../../components/form/Form';
import style from './Contact.module.css';
import { FaNewspaper } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.contact_head}>
        <div className={style.headleft}>
          <h1>Contact</h1>
          <p>Elit, sed do eiusmod tempor</p>
          <p>
            Vector illustration is from StorySet. Incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className={style.headright}>
          <img
            src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg"
            alt="banner"
          />
        </div>
      </div>

      <div className={style.contact_text}>
        <h1>Create success campaign with us!</h1>
        <p>Elit, sed do eiusmod tempor</p>
        <p>
          Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        </p>
      </div>

      <div className={style.contact_form}>
        <div className={style.contact_formleft}>
          <div className={style.card}>
            <div className={style.cardleft}>
            <FaNewspaper />
            </div>
            <div className={style.cardright}>
              <h4>Media Contact</h4>
              <p>Mr. John Doe</p>
              <p>012-345-6789</p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardleft}>
            <FaEnvelope />
            </div>
            <div className={style.cardright}>
              <h4>Email Contact</h4>
              <p>email@example.com</p>
              <p>support@example.com</p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardleft}>
            <FaPhone />
            </div>
            <div className={style.cardright}>
              <h4>Phone Support</h4>
              <p>+994 50 123 45 67</p>
              <p>+994 55 987 65 43</p>
            </div>
          </div>
        </div>

        <div className={style.contact_formright}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
