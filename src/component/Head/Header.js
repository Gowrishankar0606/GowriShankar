import React, { useState } from 'react'
import "./Header.css"


const Header = () => {
  //when scroll header at top 
  window.addEventListener("scroll", function()
  {
    const header=document.querySelector(".Header")
    header.classList.toggle("active", window.scrollY> 100);
  })
  //toggle menu
  const [Mobile, setMobile]= useState(false)

    return (
    <>
      <header className='Header'>
        <div className='container d_flex'>
            <div className='logo'>
                <h1></h1>
            </div>
             <div className='navlink'>
                
                  <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={()=>setMobile(false)}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#Project'>Project</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#Certificate'>Certificates</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
            </div>
        </div>
      </header>
      
    </>
  )
}

export default Header
