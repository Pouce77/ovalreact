import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className="marge">
      <nav>
       <ul class="p-0">
           <li className="textNav m-2">
               <Link to="/presentation">Présentation</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/Albums">Albums</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/actualites">Actualités</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/galerie">Galerie</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/video">Vidéo</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/calendrier">Calendrier</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/contact">Contact</Link>
           </li>
       </ul>
    </nav>
    </div>
  )
}

export default Menu
