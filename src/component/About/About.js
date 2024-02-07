import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <section className='About top' id='about'> 
        <div className='container'>
            <div className='heading'>
                <h4>About Me</h4>  
            </div>
            <div className='content grid aboutme'>
                <div className='box btn_shadow boxmargin'>
                    <p>An enthusiastic fresher with highly motivated  having bachelors of engineering degree in Computer Science Engineering. Eager to learn new technologies and methodologies.</p>
                 </div>
            </div>
            <div className=' f_flex top personaldeatails'>
                 <div className='left'>
                     <div className='Personal'>
                     <h2 className='pd'>Personal Details</h2>
                    <p>Dob  <span>: 22-12-2002</span></p>
                    <p>Gender <span>: Male</span></p>
                    <p>Nationality  <span>: Indian</span></p>
                    <p>Blood Group <span>: A+<sup>ve</sup></span></p>
                    <p>Email  <span>: pgscse2212@gmail.com</span></p>
                    <p>Phone No  <span>: 9791864613</span></p>
              </div>
            </div>
            <div className='right'>
                     <div className='Education'>
                     <h2 className='ed'>Education</h2>
                     <p>10<sup>th</sup>&nbsp;&nbsp;State Board &nbsp;&nbsp;2018<br></br> John Dewey Matric Higher Secontary School,Panruti<br></br> Percentage: 79%</p>
                     <p>12<sup>th</sup>&nbsp;&nbsp;State Board &nbsp;&nbsp;2018<br></br> John Dewey Matric Higher Secontary School,Panruti<br></br> Percentage: 66%</p>
                     <p>B.E (CSE) &nbsp;&nbsp;Anna University &nbsp;&nbsp;2024 <br></br>V.R.S. College of Engineering and Technology, Arasur<br></br>CGPA: 8.3</p>
                    
              </div>
            </div>
      </div>
             </div>
      </section>
    </>
  )
}

export default About
