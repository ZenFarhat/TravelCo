import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className='nav__logo'>
        <h1>Travel Co.</h1>
      </div>
      <ul className='nav__list'>
        <a href='#about'>About</a>
        <a href='#benefits'>Benefits</a>
        <a href='#contact'>Contact</a>
      </ul>
    </nav>
  );
}

// <a href='https://pngtree.com/so/airplane'>airplane png from pngtree.com</a>
export default Nav;
