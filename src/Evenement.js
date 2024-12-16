import React from 'react'
import './Galerie.css'
import './Evenement.css'

const Evenement = (props) => {
  console.log(props.evenement)
  if(props !== undefined){
  console.log(props.evenement)
  
  const tabImages=props.evenement.images
  return (
    <>      
      <div className='row'>
      <h1>{props.evenement.name}</h1>
        <div className='row-col-5'>
          {tabImages.map((image,index) => (
            <>
            <button className='bg-black border-0 p-0' type='button' data-toggle="modal" data-target={"#modal"+index}><img key={index} src={"https://api.ovalskylight.fr/images/"+image} alt={image} className="imageGalerie m-3"></img></button>
            <div className="modal fade" id={"modal"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                <div className="modal-body">
                  <img className="w-100" src={"https://api.ovalskylight.fr/images/"+image} alt={image}></img>
                </div>
              </div>
            </div>
          </div>
          </>
          )
          )}
        </div>
      </div>

    </>
  )
}else{
  <>
  <h1>Sélectionner  une galerie</h1>
  </>
}
}

export default Evenement