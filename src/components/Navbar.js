import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="" className="brand-logo left">Oasis Infobyte</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="https://oasisinfobyte.com/">Home</a>
          </li>
          <li>
            <a href="https://oasisinfobyte.com/#features">Internships</a>
          </li>
          <li>
            <a href="https://oasisinfobyte.com/#service">Services</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
