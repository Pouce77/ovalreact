import React, { useEffect, useState} from 'react'
import Event from './event.js'
import './Calendar.css'
import { Link } from 'react-router-dom';

const Calendar = () => {

  const [tabEvent,setTabEvent]=useState([])

  useEffect(()=>{
    fetch("https://api.ovalskylight.fr/api/event_calendars")
    .then((res) => {
      return res.json();
    }) 
    .then(function(data) {
      let array=data['hydra:member']
      console.log(array);
      array.forEach(element => {
        setTabEvent(array=>[...array, element])
      });
    })
  },[])

  return (
    <div>
      <nav className='ariane' aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
      <li class="breadcrumb-item active" aria-current="page">Calendrier</li>
      </ol>
    </nav>
      <h1 className="mb-4">Calendrier</h1>
      <div className="col-lg-8 col-md-10 m-auto">
        {tabEvent.map((event)=><Event key={event['id']}title={event['title']} location={event['location']} previewDate={event['previewDate'] }/>)}
        
      </div>
    </div>
  )
}

export default Calendar
