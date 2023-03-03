import React, { useState } from 'react'
import Favicon from './favicon'
import './WSPGallery.css'

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handelOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <Favicon
            setOpenModal={setOpenModal}
            slideNumber={slideNumber}
            setSlideNumber={setSlideNumber}
            galleryImages={galleryImages}
          />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="bla1" />
          </div>
        </div>
      )}
      <br />
      Current slide number : {slideNumber + 1}
      <br />
      Total slide: {galleryImages.length}
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handelOpenModal(index)}
              >
                <img src={slide.img} alt="bla" />
                <div className='comments'>{slide.title}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WSPGallery
