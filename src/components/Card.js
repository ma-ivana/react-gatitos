import React from 'react';
import '../style/Card.scss';

const Card = (props) => {
   console.log(props)
   
   const tarjetasGatos = props.info.map((gato, i) => 
      <>
      <article key={i} className="card">
       <div className="imagenCh"> <img alt={gato.name} src={gato.img}/> </div>
       <div className="textoCh"> 
       <h4>{gato.name}</h4>
       <p className="parrCh">{gato.shortDesc}</p>
       <button id="info">Ver más</button>
       </div>
     </article>

     <div id="infoModal" className="modal nomostrar">
      <div className="imagenGR"> <img alt={gato.name} src={gato.img}/> </div>
         <div className="modalcontent">
           <h4 id="nombreGr">{gato.name}</h4>
           <p className="parrGr">{gato.longDesc}</p>
           <button id="cerrarModal">Cerrar</button>
         </div>
     </div>
     </>
  )
  
  return tarjetasGatos
};

export default Card;