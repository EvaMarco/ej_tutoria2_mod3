import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <header className="header">
          <h1 className = "page__title">
            Legion on Hell
          </h1>
          <p className ="header__text">la privacidad es una farsa, los datos son libres.</p>
        </header>
    );
  }
}

export default Header;
