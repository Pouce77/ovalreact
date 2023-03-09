import React from 'react'
import { Link } from 'react-router-dom'
import './presentation.css'

const Presentation = () => {
  return (
    <>
    <Link to="/" className='link'>Accueil</Link>
    <div className='presentation'>
      <img src="/images/galerie/0060 IMG_0004.JPG" className='imagePresent' alt="illustration de présentation"></img>
      <p>Inspiré par le jazz, le rock et les musiques minimalistes (Erik Satie, Ornette Coleman ou Franck Zappa sont des références permanentes...), le quartet Oval Skylight (Arnaud Benoit piano, Anthony Colas guitare, Clément Leleu basse, Benjamin Genin trompette) joue un répertoire de composition originale ,aériennes, mélancoliques, rêveuse. La poésie représente aussi une source d'inspiration permanente des composition de notre projet.</p>
    </div>
    </>
  )
}

export default Presentation
