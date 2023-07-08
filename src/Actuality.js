import React from 'react'
import './actuality.css'

const Actuality = (props) => {
  return (
    <>
    <div className='mt-5'>
      <p className='pt-3 mb-3 border-light border-1 border-top descript'>{props.title}</p>
      <img className='imgActu' src={props.src} alt="flyer de l'actualité"></img>
    </div>
    </>
  )
}

export default Actuality
