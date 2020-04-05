import React from 'react';
import '../style/Card.scss';
import Button from './Button';

const Card = ({name, shortDesc, img, isAvailable, longDesc}) => {
    
    let disponible = isAvailable ? '' : 'cardDisabled'

    return (
      <>
      <article className={`card ${disponible}`}>
       <div className="imagenCh"> <img alt={name} src={img}/> </div>
       <div className="textoCh"> 
       <h4>{name}</h4>
       <p className="parrCh">{shortDesc}</p>
       <Button mensaje={isAvailable 
        ? 'Ver más' 
        : 'No disp.'}/>
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