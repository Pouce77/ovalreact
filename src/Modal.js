import React from 'react'
import './Home.css'
import { ModalContext } from './Context/contextModal';
import { useContext } from 'react'

const Modal = () => {
 
  const modalContext=useContext(ModalContext)
  let visibility=modalContext.visibility
  
  const closeModal=(e) => {
    const mod=document.getElementById('mod')
    mod.style.display='none'
    modalContext.changeVisibility()
  }  

  if(visibility){
    return (
      <>
      <div id='mod' className='modalHome modalWidth anim'>
        <div className='cross' onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <img className='imgModal' src='/images/actuality/actu4.jpg' alt='modal'></img>
      </div>
      </>
    )
    }
    else
    {
      <></>
    }
  }  

export default Modal
