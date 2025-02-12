import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

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
            <h1>Vidéos</h1>
            <div className="container d-flex flex-column justify-content-center m-auto">
            <video className="w-100 m-4" controls >
                <source src="./images/ovalVideo.mp4" type="video/mp4"/>
            </video>
            <video className="w-100 m-4" controls >
                <source src="./images/video2.mp4" type="video/mp4"/>
            </video>
            </div>
        </div>
    </div>
  )
}

export default Videos
