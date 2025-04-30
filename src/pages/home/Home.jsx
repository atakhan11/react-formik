import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.home_image}>
        <div className={style.home_content}>
          <p>HTML CSS Template with Bootstrap 5 Beta 1</p>
          <p>
            You are not allowed to re-distribute this Purple Buzz HTML template
            as a downloadable ZIP file on any kind of Free CSS collection
            websites. This is strongly prohibited. Please contact TemplateMo for
            more information.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div className={style.home_services}>
        <h1>Services</h1>
        <div className={style.home_service}>
          <div className={style.home_serviceleft}>
            <i className="fa-solid fa-gift"></i>
          </div>
          <div className={style.home_serviceright}>
            <h1>Make Success for future</h1>
            <div className={style.home_serviceline}></div>
            <p>
              You are free to use this template for your commercial or business
              websites. You are not allowed to re-distribute this template ZIP
              file on any template collection websites. It is too easy to
              illegally copy and repost this template.
            </p>
          </div>
        </div>
      </div>

      <div className={style.home_purple1}>
        <button>All</button>
        <button>Graphic</button>
        <button>UI/UX</button>
        <button>Branding</button>
      </div>

      <div className={style.home_cards1}>
        <div className={style.home_cards}>
          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className={style.home_card}>
            <button>UI/UX Design</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>

      <div className={style.home_purple2}>
        <div className={style.home_purple}>
          <i className="fa-solid fa-box"></i>
          <p>
            Lorem ipsum dolor sit amet. Lorem, ipsum.
            <br />
            Lorem ipsum dolor sit.
          </p>
          <button>View on Work</button>
        </div>
        <div className={style.home_purple2right}></div>
      </div>

      <div className={style.home_cards2}>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className={style.home_card2}>
          <div className={style.home_carditem}>
            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
