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
          <p className="fonttitre mb-3">Concert à la tête des trains à Tousson le 22 juillet 2023</p>
          <img className='m-auto imgActu' src='/images/actuality/actu5.jpg' alt="Actualité principale"></img>
        </div>
        <Actuality title="Concert du 6 juillet 2023 à Chailly en Bière" src='/images/actuality/actu4.jpg'/>
        <Actuality title="Concert du 11 juin 2023 à Chailly en Bière" src='/images/actuality/actu3.jpg'/>
        <Actuality title="Festival Cultures en jardins à Valence en Brie" src='/images/actuality/actu2.jpg'/>
        <Actuality title="Concert à l'Imprimerie du 18 mars 2023" src='/images/actuality/ConcertImprimerie.jpg'/>
      </div>
    </>
  )
}

export default Actualities
