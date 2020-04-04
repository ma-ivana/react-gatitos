import React from 'react';
import facebook from '../img/icons8-facebook-nuevo-24.png';
import google from '../img/icons8-google-plus-24.png';
import twitter from '../img/icons8-twitter-circled-24.png';
import copyright from '../img/icons8-derechos-de-autor-24.png';

const Footer = () => {
  return (
    <>
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
    </>
  )
};

export default Footer;