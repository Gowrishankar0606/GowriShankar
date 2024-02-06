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
              return <Card1 key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} />
              })}
              
            </div>
        </div>
     </section>
    </>
  )
}

export default Internship
