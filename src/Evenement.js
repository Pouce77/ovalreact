import React from 'react'
import './Galerie.css'

const Evenement = (props) => {

  const tabImages=props.images.map(img => <img src={"https://api.ovalskylight.fr/images/"+img} alt={img} className="imageGalerie m-3"></img>)
  return (
    <>
      <h1>{props.title}</h1>
      
      <div className='row'>
        <div className='row-col-5'>
          {tabImages}
        </div>
      </div>
    </>
  )
}

export default Evenement