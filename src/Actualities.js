import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Actualities.css'
import Actuality from './Actuality'

const Actualities = () => {

  const [title, setTitle]=useState('')
  const [filePath,setFilePath] = useState('')
  const [tabActu,setTabActu]=useState([])
  
  function stateChange(titre,url){
    setTitle(titre)
    setFilePath(url)
  }

  useEffect(() => {
   
    fetch("https://api.ovalskylight.fr/api/actualities")
  .then((res) => {
   return res.json();
  }) 
  .then(function(data) {

    console.log(data)
    let array=data['hydra:member']
    array.reverse()
    console.log(array);    
     
      array.forEach(element => {
        if(element['isPrincipal']) {
          stateChange(element['title'],element['filePath'])
        }else{
        setTabActu(array=>[...array, element])
       
        }
      });
    
  })},[]);

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
          <p className="fonttitre mb-3">{title}</p>
          <img className='m-auto imgActu' src={'https://api.ovalskylight.fr/images/'+filePath} alt="Actualité principale"></img>
        </div>
      <div className='d-flex flex-wrap'>
        {tabActu.map((actu)=><Actuality key={actu['id']} title={actu['title']} src={'https://api.ovalskylight.fr/images/'+actu['filePath']}/>)}
      </div>
      </div>
    </>
  )
}

export default Actualities
