import React from 'react'
import "./Home.css"
import My from "../Pic/My.jpg"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section className='Home' id='home'>
      <div className='container f_flex top'>
      <div className='right'>
              <div className='right-img'>
                <img src={My} alt='' height="480" width='390'/>
              </div>
            </div>
        <div className='left top'>
            <h3>WELCOME YOU ...</h3>
            <h1>Hi, I'm <span>Gowri Shankar</span></h1> 
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
              <button className='bt_shadow'>
                    Download Resume
                </button>
              </div>
            </div>
       <div className='Home_btn d_flex'>
            <div className='col_1'>
                <h4>FIND ME ON </h4>
                <div className='button'>
                    <button className='btn_shadow'>
                        < i className='fab fa-whatsapp'></i>
                    </button>
                    <button className='btn_shadow'>
                        < i className='fab fa-linkedin-in'></i>
                    </button>
                    <button className='btn_shadow'>
                        < i className='fa-solid fa-envelope'></i>
                    </button>
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
