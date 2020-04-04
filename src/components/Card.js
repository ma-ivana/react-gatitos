import React from 'react';
import '../style/Card.scss';

const Card = ({name, shortDesc, img, disponible, longDesc}) => {
    
    let isAvailable = disponible
    ? '' 
    : 'cardDisabled'

    return (
      <>
      <article className={`card ${isAvailable}`}>
       <div className="imagenCh"> <img alt={name} src={img}/> </div>
       <div className="textoCh"> 
       <h4>{name}</h4>
       <p className="parrCh">{shortDesc}</p>
       <button id="info">
         {
          disponible
          ? 'Ver más' 
          : 'No disp.'
          }
        </button>
       </div>
     </article>

     <div id="infoModal" className="modal nomostrar">
      <div className="imagenGR"> <img alt={name} src={img}/> </div>
         <div className="modalcontent">
           <h4 id="nombreGr">{name}</h4>
           <p className="parrGr">{longDesc}</p>
           <button id="cerrarModal">Cerrar</button>
         </div>
     </div>
     </>
    )
  // )
  
  // return tarjetasGatos
};

export default Card;