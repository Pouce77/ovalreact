import React, { useEffect, useState } from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="menuContainer">
    <div className={`marge ${isVisible ? 'fade-in' : ''}`}>
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
    <img className={`imageAccueil ${isVisible ? 'fade-out' : ''}`} src="/images/imageAccueil.jpg" alt="accueil" />  
    </div>
  )
}

export default Menu
