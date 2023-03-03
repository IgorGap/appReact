import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Favicon = ({
  setOpenModal,
  slideNumber,
  setSlideNumber,
  galleryImages,
}) => {
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlider = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }
  const nextSlider = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
    console.log('nextSlider')
  }
  
  return (
    <>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="btnClose"
        onClick={handleCloseModal}
      />
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        className="btnPrev"
        onClick={prevSlider}
      />
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        className="btnNext"
        onClick={nextSlider}
      />
    </>
  )
}

export default Favicon
