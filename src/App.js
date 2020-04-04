import React from 'react';
import gatito1 from './img/gatito1.jpg';
import gatito2 from './img/gatito2.jpg';
import gatito3 from './img/gatito3.jpg';
import gatito4 from './img/gatito4.jpg';
import gatito5 from './img/gatito5.jpeg';
import gatito10 from './img/gatito10.jpg';
import hamburger from './img/bars.png';
import facebook from './img/icons8-facebook-nuevo-24.png';
import google from './img/icons8-google-plus-24.png';
import twitter from './img/icons8-twitter-circled-24.png';
import copyright from './img/icons8-derechos-de-autor-24.png';
import Card from './components/Card';


const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: gatito1,
    pelaje: ["naranja", "blanco", "gris", "rayado"],
    sexo: "macho"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: gatito2,
    pelaje: ["blanco"],
    sexo: "hembra"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: gatito3,
    pelaje: ["blanco", "gris", "rayado"],
    sexo: "hembra"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: gatito4,
    pelaje: ["naranja", "blanco", "negro", "rayado"],
    sexo: "macho"
  },

  {
    name: "Calamardo",
    shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: gatito5,
    pelaje: ["negro"],
    sexo: "macho"
  }
]


const App = () => {
  return (
    <>
     <nav>
        <div>
            <h3>#AdoptAdas</h3>
        </div>
        <div className="hamburguesa">
            <img alt="hamburger" src={hamburger} className="hamburger"></img>
        </div>
    </nav>
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

    <div className="formulario">
  <form action="testURL.com" method="post">
    <label><span className="pelajes">Pelaje</span><br/>
            <input type="checkbox" name="pelaje" value="negro"/>Negro<br/>
            <input type="checkbox" name="pelaje" value="blanco"/>Blanco<br/>
            <input type="checkbox" name="pelaje" value="gris"/>Gris<br/>
            <input type="checkbox" name="pelaje" value="naranja"/>Naranja<br/>
        <input type="checkbox" name="pelaje" value="amarillo"/>Amarillo<br/>
        <input type="checkbox" name="pelaje" value="rayado"/>Rayado<br/>
    </label>
    <label><span className="sexo">Sexo</span><br/>
        <div>
        <input type="radio" name="sexo" value="macho"/>Macho<br/>
        <input type="radio" name="sexo" value="hembra"/>Hembra<br/>
        <input type="radio" name="sexo" value="indif"/>Indiferente<br/>
        </div>
    </label>
    <div className="textoForm">
        <div className="textoForm1">
            <label>Nombre<br/>
            <input type="text" id="username" required placeholder="Escribí tu nombre de usuario" name="username"/>
            </label>
        </div>
        <div className="textoForm2">
            <label>Teléfono de contacto<br/>
            <input type="number" id="telefono" required placeholder="Escribí un teléfono de contacto" name="telefono"/>
            </label>
        </div>
        <div className="textoForm3">
            <button type="submit">Enviar</button>
        </div>
    </div>
  </form>
  </div>


    <section>
        <div className="containerTarjetas">
          <Card info={gatos}/>
        </div>
    </section>

     <footer>
        <div className="containerRedes">
            <img alt="imagen de facebook" src={facebook} className="fab"></img>
            <img alt="imagen de google plus" src={google} className="fab"></img>
            <img alt="imagen de twitter" src={twitter} className="fab"></img>

        </div>
        <div className="containerCopyright">
            <img alt="imagen de copyright" src={copyright} className="fa"></img><p>  2020 | All rights reserved</p>
        </div>
    </footer>

    <script src="main.js"></script>
  </>
    
    
  );
}

export default App;
