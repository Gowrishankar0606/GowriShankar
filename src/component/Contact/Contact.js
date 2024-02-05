import React, { useState } from 'react'
import contact1 from './contact1.png'
import './Contact.css'


const Contact = () => {
    const[data, setdata]=useState({
        fullname: "",
        email:"",
        Message:""
    })
    const InputEvent =(event)=>{
        const {name,value}=event.target
        setdata((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit = (event)=>{
        event.preventDefault()
        alert(
            `My name is ${data.fullname}.  
             My email address is ${data.email}.  
             Here is my message I want to say : ${data.message}. 
          `
          )
    }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
            <div className='heading text-center'>
                <h4>CONTACT</h4>
                <h2>Contact with Me</h2>
            </div>

            <div className='content d_flex'>
                <div className='left'>
                    <div className='box box_shadow'>
                        <div className='img'>
                            <img src={contact1} alt='Sorry' height='250px' width='350px'/>
                        </div>
                        <div className='details'>
                            <h1>Gowri Shankar</h1>
                            <p>I am Ready to work. Connect with me via and call in to my account.</p>
                            <p>Phone No: +91 9791864613</p>
                            <p>Email: pgscse2212@gmail.com</p>
                            <span>FIND ME</span>
                            <div className='button f_flex'>
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
                <div className='right box-shadow'>
                    <form onSubmit={formSubmit}>
                        <div className='input row'>
                            <span>YOUR NAME</span>
                            <input type='text' placeholder='Enter Name' required name='fullname' value={data.fullname} onChange={InputEvent}/>
                        </div>
                        <div className='input row'>
                            <span>YOUR EMAIL </span>
                            <input type='email' placeholder='Enter Email' required  name='email' value={data.email} onChange={InputEvent}/>
                        </div>
                        <div className='input row '>
                            <span>YOUR MESSAGE</span>
                            <textarea cols='57' rows='10' name='message'  value={data.message} onChange={InputEvent}></textarea>
                        </div>
                        <button className='btn_shadow'>
                            SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>  
      </section>
    </>
  )
}

export default Contact
