import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class CardList extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h2>Información obtenida </h2>
        <ul className="person__list">
          {this.props.filteredData.map((item, index) =>   
            <li key={index}>
              <DataCard item = {item}/>
            </li>      
          )}
        </ul>
      </React.Fragment>
    );
  }
}

CardList.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;