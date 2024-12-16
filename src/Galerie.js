import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Galerie.css'
import Evenement from './Evenement'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Galerie = () => {

  const [tabImage,setTabImage]=useState([])
  const [selectedGallery, setSelectedGallery]=useState(null)

  useEffect(()=>{
    fetch("https://api.ovalskylight.fr/api/photos")
    .then((res) => {
      return res.json();
    }) 
    .then(function(data) {
      let array=data['hydra:member']
    //  array.forEach(element => {
    //    setTabImage(array=>[...array, element])
    //  });
      setTabImage(array)
      setSelectedGallery(array[0]);
    })
  },[])

  console.log(tabImage)

return (
  <>
  <nav className='ariane' aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li className="breadcrumb-item active" aria-current="page">Galerie</li>
    </ol>
  </nav>
      <div className='d-flex flex-column justify-content-center'>
        <Sidebar galleries={tabImage} onSelectGallery={setSelectedGallery}/>
        {tabImage.length===0 ? (
        <p>Chargement de la galerie...</p>
      ) : (
        <Evenement evenement={selectedGallery}/>
      )}
      </div>
  </>
);
  
}

export default Galerie


