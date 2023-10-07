import React from 'react'
import { Link } from 'react-router-dom'
import './Actualities.css'
import Actuality from './Actuality'

const Actualities = () => {
  return (
    <>
      <nav className='ariane' aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Actualités</li>
        </ol>
      </nav>
      <div>
        <h1 className='mb-5'>
          Actualités
        </h1>
        <div className='d-flex justify-content-center flex-column'>
          <p className="fonttitre mb-3">Concert au Swing du 7 octobre 2023</p>
          <img className='m-auto imgActu' src='/images/actuality/swing.jpg' alt="Actualité principale"></img>
        </div>
      <div className='d-flex flex-wrap'>
        <Actuality title="Concert au kaktus du 30 septembre 2023" src='/images/actuality/kaktus.jpg'/>
        <Actuality title="Concert à la grange du Loing du Samedi 9 Septembre 2023" src='/images/actuality/grangeduloing.jpg'/>
        <Actuality title="Concert à la tête des trains à Tousson le 22 juillet 2023" src='/images/actuality/actu5.jpg'/>
        <Actuality title="Concert du 6 juillet 2023 à Chailly en Bière" src='/images/actuality/actu4.jpg'/>
        <Actuality title="Concert du 11 juin 2023 à Chailly en Bière" src='/images/actuality/actu3.jpg'/>
        <Actuality title="Festival Cultures en jardins à Valence en Brie" src='/images/actuality/actu2.jpg'/>
        <Actuality title="Concert à l'Imprimerie du 18 mars 2023" src='/images/actuality/ConcertImprimerie.jpg'/>
      </div>
      </div>
    </>
  )
}

export default Actualities
