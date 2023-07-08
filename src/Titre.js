import React from 'react'
import './Titre.css'

const playlist=[
  {name:'Comme une vague',src:'musiques/COMME UNE VAGUE.wav'},
  {name:'Emily',src:'musiques/EMILY.wav'},
  {name:'The bright city',src:"musiques/THE BRIGHT CITY.wav"},
  {name:'Dans la neige',src:'musiques/DANS LA NEIGE.wav'},
  {name:'Le dernier morceau',src:'musiques/LE DERNIER MORCEAU.wav'}
]

const Titre = () => {
  const list=playlist.map((d)=>
  <li className="titre flexDir p-2 ps-5 pe-5 d-flex justify-content-between">
    <div>
      {d.name}
    </div>
    <audio src={d.src} controls>{d.name}</audio>
  </li>);
    
   return (
    <div>
     {list}
    </div>
  )
}

export default Titre
