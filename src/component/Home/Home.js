import React from 'react'
import "./Home.css"
import My from "../Pic/My.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section className='Home' id='home'>
      <div className='container f_flex top'>
      <div className='right'>
              <div className='right-img'>
                <img src={My} alt='' height="550px" width='320px'/>
              </div>
            </div>
        <div className='left top'>
            <h3>WELCOME YOU ...</h3>
            <h1>Hi, I'm <span>Gowri Shankar </span></h1> 
            <h2>a <span>
            <Typewriter
            words={['Web Developer', 'Job Seeker','Fresher']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}/>
            </span></h2>
            <div className='Resume-btn d_flex'>
              <div className='Resume'>
                <a href='https://drive.google.com/file/d/1OcsbrCx_vYU0d5nDO_8hleWmFWgqeWvB/view?usp=drivesdk' download>
              <button className='bt_shadow'>
                    Download Resume
                </button></a>
              </div>
            </div>
       <div className='Home_btn d_flex'>
            <div className='col_1'>
                <h4>FIND ME ON </h4>
                <div className='button'>
                  <a href='https://wa.me/+91 9791864613'>
                    <button className='btn_shadow'>
                        < i className='fab fa-whatsapp'></i>
                    </button></a>
                    <a href='http://www.linkedin.com/in/gowri-shankar-4ab3741bb'>
                    <button className='btn_shadow'>
                        < i className='fab fa-linkedin-in'></i>
                    </button></a>
                    <a href='https://twitter.com/GowriSh06459217'>
                    <button className='btn_shadow'>
                    <i class="fab fa-twitter"></i>
                    </button></a>
                </div>
            </div>
       </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Home
