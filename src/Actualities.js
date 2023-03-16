import React from 'react'
import { Link } from 'react-router-dom'
import './Actualities.css'

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
        <h1>
          Actualités
        </h1>
        <div className='d-flex justify-content-center'>
          <img className='m-2 imgActu' src='/images/ConcertImprimerie.jpg'></img>
        </div>
      </div>
    </>
  )
}

export default Actualities
