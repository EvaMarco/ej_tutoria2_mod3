import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p> El numero de coincidencias es de  {this.props.data.length}.</p>
      </React.Fragment>
    );
  }
}

Status.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Status;