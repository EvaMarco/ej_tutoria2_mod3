import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>Introduce tu email para comprobar si estas en nuestra base de datos:</p>
        <input type="text" onChange = {this.props.inputAction}/>
      </React.Fragment>
    );
  }
}
Filters.propTypes = {

};


Filters.propTypes = {
  inputAction: PropTypes.func.isRequired
};

export default Filters;
