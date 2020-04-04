import React from 'react';

const Form = () => {
  return (
    <>
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
    </>
  )
};
  
export default Form;