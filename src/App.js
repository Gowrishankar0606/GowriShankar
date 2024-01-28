import React from 'react'
import Header from "./component/Head/Header"
import Home from "./component/Home/Home"
import About from './component/About/About'
import Project from './component/Project/Project'
import Skills from './component/Skills/Skills'
import Certificate from './component/Certificate/Certificate'
import Contact from './component/Contact/Contact'
import Internship from './component/Internship/Internship'
import Footer from './component/footer'

import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Project/>
    <Skills/>
    <Certificate/>
    <Internship/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
