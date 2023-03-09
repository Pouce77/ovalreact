import React from 'react'
import './Albums.css'
import imgAlbum from './images/album1.png';
import { Link } from 'react-router-dom';

const Albums = () => {
  return (
    <>
    <Link to="/" className='link'>Accueil</Link>
    <div className="album flexDir">
      <div className='divImage widthImage'>
        <img className='image' src={imgAlbum} alt="album n°1"></img>
      </div>
      <div className='divTitle'>
        <h2>Oval Skylight n°1</h2>
        <div className="ecouter">
          <Link to="/ovalskylight1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg>
          </Link>
          <h3>Ecoutez l'album</h3>
        </div>
      </div>
      <div className='description'>
        <p> <small> Description de l'album qui est vraiment un bel album avec de belles chansons et une belle pochette ! En plus il y a beaucoup de chansons au piano, à la guitare et à la basse . C'est chouette ! Ecoutez vite !</small></p>
      </div>
    </div>
    <div className='album flexDir'>
      <h1>A venir...</h1>
    </div>
    </>
  )
}

export default Albums
