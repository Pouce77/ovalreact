import React from 'react'
import imgAlbum from './images/album1.png';
import './Album1.css';
import { Link } from 'react-router-dom';
import Titre from './Titre';

const Album1 = () => {
  return (
    <>
    <nav className='ariane' aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item"><Link to="/albums">Albums</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Oval Skylight n°1</li>
      </ol>
    </nav>
    <div>
      <div className="">
      <img className='image' src={imgAlbum} alt="album n°1"></img>
      </div>
      <div className="listeTitre">
        <h3 className="albumTitle">Ovalskylight n°1 - 2022</h3>
        <ul>
          <Titre/>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Album1
