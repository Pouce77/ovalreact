import React from 'react'

const event = (props) => {
  const previewDate= Date.parse(props.previewDate);
  const dateToString =new Date(previewDate);
  const day=dateToString.getDate()+'/'+(dateToString.getMonth()+1)+'/'+dateToString.getFullYear();
  return (
    <div className="fontCalendar border-1 border-white border-top d-flex flex-row justify-content-between py-4 fs-6">
          <p className="px-2"><strong>{props.title}</strong></p>
          <p className="px-2">{props.location}</p>
          <p className="px-2"><i>{day}</i></p>
    </div>
  )
}
export default event
