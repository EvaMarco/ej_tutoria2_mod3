import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="card">
        <h3 className = "name_title">Nombre: </h3>
        <p className="name">{item.name}</p>
        <h3 className = "mail_title"> Email</h3>
        <p className="mail">{item.email}</p>
        <h3 className = "pass_title">Contraseñas</h3>
        <ul className="pass__list">
          {item.passwords.map((pass, index)=> <li className = "pass" key = {index}>{pass}</li>)}
        </ul>
        <h3 className = "bank_title">Información bancaria</h3>
        <div className="bank__info">
          <h4>Cuenta Bancaria</h4>
          <p className="bank__account">{item.bank.iban}</p>
          <h4>Pin</h4>
          <p className="bank__pin">{item.bank.pin}</p>
        </div>
      </div >
    )
  }
}

DataCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default DataCard;
