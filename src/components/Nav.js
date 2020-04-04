import React from 'react';
import hamburger from '../img/bars.png';

const Nav = () => {
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
    </>
  )
};

export default Nav;