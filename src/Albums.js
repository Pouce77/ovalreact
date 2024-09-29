import React from 'react'
import './Albums.css'
import imgAlbum from './images/album1.png';
import imgBleu from './images/album-bleu.jpg';
import { Link } from 'react-router-dom';

const Albums = () => {
  return (
    <>
    <nav className='ariane' aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Albums</li>
      </ol>
    </nav>
    <div className="album flexDir scale-up-center">
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
          <h3 className='titleAlbum'>Ecoutez l'album</h3>
        </div>
      </div>
      <div className='description'>
        <p> <small> "Entre jazz, rock et ambient, le premier album d'Oval Skylight propose des compositions mélancoliques, rêveuses, oniriques."</small></p>
      </div>
    </div>
    <div className='album flexDir scale-up-center'>
    <div className='divImage widthImage'>
        <img className='image' src={imgBleu} alt="album n°2"></img>
      </div>
      <div className='divTitle'>
        <h2>Oval Skylight n°2</h2>
        <div className="ecouter">
          <h3 className='titleAlbum'>A découvrir sur les platformes...</h3>
        </div>
        <div>
          <a href="https://open.spotify.com/intl-fr/track/0eNpLXsxz75GlTauKRbdTo" className="m-4" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
          </svg>
          </a>
          <a href="https://www.deezer.com/fr/album/536978642" className="m-4" target="_blank" rel="noreferrer">
            deezer
          </a>
        </div>
      </div>
      <div className='description'>
        <p> <small> "Découvrez bientôt le nouvel album d'Oval Skylight..."</small></p>
      </div>
    </div>
    </>
  )
}

export default Albums
