import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className='nav__logo'>
        <h1>Travel Co.</h1>
      </div>
      <ul className='nav__list'>
        <li>About</li>
        <li>Benefits</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// <a href='https://pngtree.com/so/airplane'>airplane png from pngtree.com</a>
export default Nav;
