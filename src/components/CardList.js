import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  render() {
    const {filteredData} = this.props;
    return (
      <ul className="person__list">
        {filteredData
          .map((item, index) =>   
          <li key={index}>
            <DataCard item = {item}/>
          </li>      
        )}
      </ul>
    );
  }
}

CardList.propTypes = {
 filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;