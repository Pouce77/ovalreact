import React from 'react'
import { Link } from 'react-router-dom'
import './Galerie.css'

const Galerie = () => {

  const galerie=[
    '0001_IMG_9961.JPG',
    '0004 IMG_9963.JPG',
    '0014 IMG_9968.JPG',
    '0020 IMG_9972.JPG',
    '0023 IMG_9975.JPG',
    '0028 IMG_9978.JPG',
    '0032 IMG_9981.JPG',
    '0039 IMG_9987.JPG',
    '0058 IMG_0003.JPG'
  ]

  const image=galerie.map(imageTab => '/images/galerie/'+imageTab)
  const tableauImage=image.map(img => <img src={img} alt={img} className="imageGalerie m-3"></img>)

return (
  <>
  <nav className='ariane' aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Galerie</li>
  </ol>
  </nav>
  <h1>Galerie</h1>
  <div className='row'>
    <div className='row-col-5'>
      {tableauImage}
    </div>
  </div>
  </>
);
  
}

export default Galerie


