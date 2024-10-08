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
      <img src="/images/galerie/IMG-20240319-WA0000.jpg" className='imagePresent' alt="illustration de présentation"></img>
      <p className='textPresentation fs-6'>Inspiré par le jazz, le rock et les musiques minimalistes (Erik Satie, Ornette Coleman ou Franck Zappa sont des références permanentes...), le quartet Oval Skylight (Arnaud Benoit piano, Anthony Colas guitare, Clément Leleu basse, Jean-François Petitjean Saxophoniste) joue un répertoire de compositions originales ,aériennes, mélancoliques, rêveuses. La poésie représente aussi une source d'inspiration permanente des compositions de notre projet.</p>
    </div>
    <div className='d-flex flex-wrap grey mt-5 p-4 rounded'>
        <div className='m-auto'>
          <img src='/images/arnaud.png' alt ='Arnaud' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Arnaud Benoit Pianiste</p>
        </div>
        <div className='m-auto'>
          <img src='/images/anthony.png' alt ='Anthony' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Anthony Colas Guitariste</p>
        </div>
        <div className='m-auto'>
          <img src='/images/clement.png' alt ='Clément' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Clément Leleu Basse</p>
        </div>
        <div className='m-auto'>
          <img src='/images/jeanfrancois.jpg' alt ='Jean-François' className='rounded-circle m-4 portrait'></img>
          <p className='textPresentation fs-6'>Jean-François PetitJean Saxophoniste</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Presentation
