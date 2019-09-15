import React from 'react';
import './scss/main.scss';
// import Data from './components/Data'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          "name": "Francisco Molina",
          "email": "paco.molina@gmail.com",
          "passwords": ["redbull", "contraseña", "god"],
          "bank": {
            "iban": "ES57 3919 3283 8402 7522 0643",
            "pin": "8970"
          }
        },
        {
          "name": "Bruno Díaz",
          "email": "bruno.diaz@aol.com",
          "passwords": ["bruno-y-ricardo", "thebatrocks", "BB"],
          "bank": {
            "iban": "US24 0776 0001 0000 0000 0001",
            "pin": "0228"
          }
        },
        {
          "name": "Angeles Iglesias",
          "email": "angeles.iglesias@hotmail.com",
          "passwords": ["sword", "0000", "123"],
          "bank": {
            "iban": "ES39 2002 4104 2471 4443 4466",
            "pin": "6732"
          }
        },
        {
          "name": "Lourdes Parra",
          "email": "lourdes.parra@gmail.com",
          "passwords": ["bonnie", "123", "0000"],
          "bank": {
            "iban": "ES23 9636 3150 7215 8752 3353",
            "pin": "3127"
          }
        }
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <ul className="person__list">
          {this.state.data.map((item,i) => 
            <li key={i}>
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

            </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
