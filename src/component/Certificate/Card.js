import React, { useState } from "react"


const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
    
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='Sorry Unable to load' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='Sorry...' />
            </div>
            <div className='modal-text right'>
              <h1 className="CertificateLink">{props.title}</h1>
              <br></br>
              <h3>{props.Organization}</h3>
              <br></br>
              <h3>{props.Dateofachievement}</h3>
              <br></br>
              <h3>{props.CertificateID}</h3>
              <br></br>
              <h3><a href={props.link} className="CertificateLink">Certificate Link</a></h3>
              <br></br>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card