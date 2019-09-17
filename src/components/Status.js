import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  render() {
    return (
        <p> Hay {this.props.filteredData.length}{this.props.filteredData.length === 1? ' resultado' : ' resultados'}. </p>
    );
  }
}

Status.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Status;