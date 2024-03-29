import React from 'react'
import './Certificate.css'
import Card from "./Card"
import Certificate_data from "./Certificate_data"

const Certificate = () => {
  return (
    <>
     <section className='Certificate top' id='Certificate'>
        <div className='container'>
            <div className='heading text-center'>
                <h4>My Certificate</h4>
            </div>
            <div className='content grid grid-cols'>
              
              {Certificate_data.map((val, index) => {
              return <Card key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} Organization={val.Organization} Dateofachievement={val.Dateofachievement} CertificateID={val.CertificateID} link={val.link}/>
              })}
              
            </div>
        </div>
     </section>
    </>
  )
}

export default Certificate
