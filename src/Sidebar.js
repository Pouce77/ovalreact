import React from 'react'
import './Sidebar.css'

const Sidebar = ({galleries, onSelectGallery}) => {


  return (
    <div className="sidebar col-10">
    <nav className='navbar navbar-expand-lg justify-content-center'>
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        {galleries.map((gallery,index) => (
          <li key={index} className="nav-item mx-2">
            <button onClick={()=> onSelectGallery(gallery)}>
              {gallery.name}
            </button>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  </div>
)
}

export default Sidebar
