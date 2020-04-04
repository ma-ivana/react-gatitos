import React from 'react';
import gatito10 from '../img/gatito10.jpg';

const Hero = () => {
  return (
    <>
      <section>
        <div className="contenedortexto">
          <div className="texto">
            <h1>Adopta un gatito</h1>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt unde esse laborum incidunt totam asperiores ipsum officiis id porro voluptate quasi consequuntur voluptatum corrupti ad laboriosam, consectetur eaque. Dolorem itaque laborum illo possimus fugit doloribus natus ullam quaerat at! Ipsa distinctio quisquam tempore? Fugiat debitis inventore excepturi totam obcaecati!</p>
          </div>
        <div className="imagen">
          <img alt="imagen de gato" src={gatito10}/>
        </div>
      </div>
    </section>
    </>
  )
};



export default Hero;