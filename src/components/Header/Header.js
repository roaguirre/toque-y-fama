import React from 'react';

import './Header.css';

const Header = () => {
    return(
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="./"><img src={require('./favicon-32x32.png')} alt="logo" /></a>
            <a className="navbar-brand" href="./">Toque y Fama</a>
          </nav>
        </header>
      );
};

export default Header;