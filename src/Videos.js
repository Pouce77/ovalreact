import React from 'react'
import { Link } from 'react-router-dom'

const Videos = () => {
  return (
    <div>
        <nav className='ariane' aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Vidéos</li>
            </ol>
        </nav>
        <div>
            <h1>Vidéo</h1>
            <video className="w-75 h-50" controls >
                <source src="./images/ovalVideo.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default Videos
