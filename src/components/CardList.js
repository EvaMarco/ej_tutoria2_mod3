import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class CardList extends React.Component {

  render() {
    return (
        <React.Fragment>
          <ul className="person__list">
            {this.props.data.map((item,i) =>   
              <li key={i}>
                <DataCard item = {item}/>
              </li>      
            )}
          </ul>
        </React.Fragment>
    );
  }
}
CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;