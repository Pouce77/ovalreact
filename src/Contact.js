import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

const senEmail = (e) => {
  e.preventDefault();

    emailjs.sendForm('service_ymgnyqn', 'template_6emcb0f', form.current, '2VmDarl2_hzA1jzLE')
      .then((result) => {
          console.log(result.text);
          const text=document.getElementById('success');
          text.style.display='block';
      }, (error) => {
          console.log(error.text);
      });
  e.target.reset();
};

  return (
    <>
    <nav className='ariane' aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Contact</li>
      </ol>
    </nav>
    <form className='contactForm' ref={form} onSubmit={senEmail}>
    <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">Nom</label>
        <input type="text" name="name" class="form-control" id="exampleFormControlInput2" placeholder="Votre nom"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Votre message"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-dark" type = "submit">Envoyer</button>
      </div>
    </form>
    <div id="success" class="m-2 ms-3 text-center disp">Votre message a été envoyé !</div>
    <div className='m-2 ms-3 text-center'>
      <a href='https://www.facebook.com/Oval.Skylight/' target='_blank' rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook m-2" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>
    </div>
    </>
  )
}

export default Contact
