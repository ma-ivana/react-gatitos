import React from 'react';
import '../style/Card.scss';

const Card = (props) => {
    
    let disponible = props.info.disponible
    ? '' 
    : 'cardDisabled'

    return (
      <>
      <article className={`card ${disponible}`}>
       <div className="imagenCh"> <img alt={props.info.name} src={props.info.img}/> </div>
       <div className="textoCh"> 
       <h4>{props.info.name}</h4>
       <p className="parrCh">{props.info.shortDesc}</p>
       <button id="info">
         {
          props.info.disponible
          ? 'Ver más' 
          : 'No disp.'
          }
        </button>
       </div>
     </article>

     <div id="infoModal" className="modal nomostrar">
      <div className="imagenGR"> <img alt={props.info.name} src={props.info.img}/> </div>
         <div className="modalcontent">
           <h4 id="nombreGr">{props.info.name}</h4>
           <p className="parrGr">{props.info.longDesc}</p>
           <button id="cerrarModal">Cerrar</button>
         </div>
     </div>
     </>
    )
  // )
  
  // return tarjetasGatos
};

export default Card;