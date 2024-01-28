import React from 'react'
import './Project.css'


const Project = () => {
  return (
    <>
      <section className='Project top' id='Project'>
        <div className='container'>
            <div className='heading'>
                <h4>Project</h4>
            </div>
            <div className='content grid'>
            <div className='box btn_shadow'>
                    <img src='' alt=''/>
                    <h2>AI Enable Car Parking Using OpenCV</h2>
                    <p>AI-enabled car parking using OpenCV is a computer vision based project that aims to automate the parking process. The project involves developing an intelligent system that can identify empty parking spaces and it gives the count of available parking spots</p>
                    <a href='https://github.com/naanmudhalvan-SI/PBL-NT-GP--3761-1680686719.git'>
                        <i className='fas fa-arrow-right'><span>&nbsp;View Project</span></i>
                    </a>
                </div> 
            </div>
        </div>
      </section>
    </>
  )
}

export default Project
