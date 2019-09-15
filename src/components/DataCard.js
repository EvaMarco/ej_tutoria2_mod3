import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
            <h1>Información obtenida </h1>
            <h2>Nombre:</h2>
            <p className="name">{item.name}</p>
            <h2> Email</h2>
            <p className="mail">{item.email}</p>
            <h2>Contraseñas</h2>
            <ul className="pass__list">
              {item.passwords.map((pass, index)=> <li key = {index}>{pass}</li>)}
            </ul>
            <h2>Información bancaria</h2>
            <div className="bank__info">
              <h3>Cuenta Bancaria</h3>
              <p className="bank__account">{item.bank.iban}</p>
              <h3>Pin</h3>
              <p className="bank__pin">{item.bank.pin}</p>
            </div>
      </React.Fragment>
    )
  }
}

DataCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default DataCard;
