import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Galerie.css'
import Evenement from './Evenement'
import { useState } from 'react'

const Galerie = () => {

  const [tabImage,setTabImage]=useState([])

  useEffect(()=>{
    fetch("https://api.ovalskylight.fr/api/photos")
    .then((res) => {
      return res.json();
    }) 
    .then(function(data) {
      let array=data['hydra:member']
      console.log(array);
      array.forEach(element => {
        setTabImage(array=>[...array, element])
      });
    })
  },[])

return (
  <>
  <nav className='ariane' aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Galerie</li>
    </ol>
  </nav>
    
  {tabImage.map((img)=><Evenement title={img['name']} images={img['images']}/>)}
  </>
);
  
}

export default Galerie


