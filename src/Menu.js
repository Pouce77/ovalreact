import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className="marge">
      <nav className="">
       <ul class="p-0">
           <li className="textNav m-2">
               <Link to="/presentation">Présentation</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/Albums">Albums</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/">Actualités</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/galerie">Galerie</Link>
           </li>
           <li className="textNav m-2">
               <Link to="/">Contact</Link>
           </li>
       </ul>
    </nav>
    </div>
  )
}

export default Menu
