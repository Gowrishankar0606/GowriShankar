import React from 'react'
import './Internship.css'
import Card1 from "./card1"
import Internship_data from "./Internship_data"

const Internship = () => {
  return (
    <>
     <section className='Certificate top'>
        <div className='container'>
            <div className='heading text-center'>
                <h4>Internship</h4>
            </div>
            <div className='content grid grid-cols'>
              
              {Internship_data.map((val, index) => {
              return <Card1 key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} Organization={val.Organization} Dateofachievement={val.Dateofachievement} CertificateID={val.CertificateID} link={val.link}  Skill1={val.Skill1} Skill2={val.Skill2} Skill3={val.Skill3} Skill4={val.Skill4} Skill5={val.Skill5} Skill6={val.Skill6} Skill7={val.Skill7}/>
              })}
              
            </div>
        </div>
     </section>
    </>
  )
}

export default Internship
