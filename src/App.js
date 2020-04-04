import React from 'react';
import gatito1 from './img/gatito1.jpg';
import gatito2 from './img/gatito2.jpg';
import gatito3 from './img/gatito3.jpg';
import gatito4 from './img/gatito4.jpg';
import gatito5 from './img/gatito5.jpeg';
import Card from './components/Card';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Form from './components/Form';
import Footer from './components/Footer';


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

     <Nav/>
     <Hero/>
     <Form/> 

    <section>
      <div className="containerTarjetas">
        {
          gatos.map((gato,i) => <Card key={i} info={gato}/>
          )
        }
      </div>
    </section>

      <Footer/>
     
    </>
  )
};

export default App;
