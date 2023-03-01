import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <nav className="navBar w-25 mt-3">
       <ul class="p-0">
           <li className="textNav m-4">
               <a href="">Présentation</a>
           </li>
           <li className="textNav m-4">
               <a href="">Album</a>
           </li>
           <li className="textNav m-4">
               <a href="">Actualités</a>
           </li>
           <li className="textNav m-4">
               <a href="">Contact</a>
           </li>
       </ul>
    </nav>
    </div>
  )
}

export default Menu
