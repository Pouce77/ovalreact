import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './presentation.css'

const Presentation = () => {
  return (
    <>
    <nav className='ariane' aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Présentation</li>
      </ol>
    </nav>
    <div className='presentation'>
      <img src="/images/galerie/0060 IMG_0004.JPG" className='imagePresent' alt="illustration de présentation"></img>
      <p className='textPresentation fs-6'>Inspiré par le jazz, le rock et les musiques minimalistes (Erik Satie, Ornette Coleman ou Franck Zappa sont des références permanentes...), le quartet Oval Skylight (Arnaud Benoit piano, Anthony Colas guitare, Clément Leleu basse, Benjamin Genin trompette) joue un répertoire de composition originale ,aériennes, mélancoliques, rêveuse. La poésie représente aussi une source d'inspiration permanente des composition de notre projet.</p>
    </div>
    <div className='d-flex flex-wrap grey mt-5 p-4 rounded'>
        <div className='m-auto'>
          <img src='/images/arnaud.png' alt ='Arnaud' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Arnaud Pianiste</p>
        </div>
        <div className='m-auto'>
          <img src='/images/anthony.png' alt ='Anthony' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Anthony Guitariste</p>
        </div>
        <div className='m-auto'>
          <img src='/images/clement.png' alt ='Clément' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Clément Basse</p>
        </div>
        <div className='m-auto'>
          <img src='/images/benjamin.png' alt ='Benjamin' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Benjamin Trompette</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Presentation
