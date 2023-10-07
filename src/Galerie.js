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
  const imprimerie=[
    'imprimerie1.jpg',
    'imprimerie2.jpg',
    'imprimerie3.jpg',
    'imprimerie4.jpg',
    'imprimerie6.jpg',
    'imprimerie7.jpg',
    'imprimerie8.jpg',
    'imprimerie9.jpg',
    'imprimerie10.jpg',
  ]
  const concert=[
    'WA0002.jpg',
    'WA0003.jpg',
    'WA0004.jpg',
    'WA0005.jpg',
    'WA0006.jpg',
    'WA0007.jpg',
    'WA0008.jpg',
    'WA0009.jpg',
    'WA0010.jpg',
    'WA0011.jpg',
    'WA0012.jpg',
    'WA0013.jpg',
    'WA0014.jpg',
    'WA0015.jpg',
    'WA0016.jpg'
  ]

  const image=galerie.map(imageTab => '/images/galerie/'+imageTab)
  const tableauImage=image.map(img => <img src={img} alt={img} className="imageGalerie m-3"></img>)

  const imprim=imprimerie.map(imgimp => '/images/galerie/'+imgimp)
  const tabImprim=imprim.map(img=> <img src={img} alt={img} className="imageGalerie m-3"></img>)

  const conc=concert.map(imgcon => '/images/galerie/'+imgcon)
  const tabConc=conc.map(img=> <img src={img} alt={img} className="imageGalerie m-3"></img>)

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
  <p>Concert à l'imprimerie</p>
  <div className='row'>
    <div className='row-col-5'>
      {tabImprim}
    </div>
  </div>
  <p>En concert...</p>
  <div className='row'>
    <div className='row-col-5'>
      {tabConc}
    </div>
  </div>
  </>
);
  
}

export default Galerie


