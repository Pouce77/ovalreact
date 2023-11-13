import React from 'react'
import './actuality.css'

const Actuality = (props) => {
  return (
    <>
    <div className='mt-5 col-12 col-lg-4 col-md-6'>
      <p className='pt-3 mb-3 border-light border-1 border-top descript fs-6'>{props.title}</p>
      <img className='imgActu' src={props.src} alt="flyer de l'actualité"></img>
    </div>
    </>
  )
}

export default Actuality
