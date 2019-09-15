import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Footer from './Footer';
import Filters from './Filters';
import PropTypes from 'prop-types';
import Status from './Status';
class Page extends React.Component {

  render() {
    return ( 
      <React.Fragment>
        <Header />
        <aside className = "aside">
          <Filters inputAction = {this.props.inputAction} inputValue = {this.props.inputValue} />
          <Status data = {this.props.filteredData}/>
        </aside>
        <CardList 
          filteredData = {this.props.filteredData}
        />
        <Footer time = {this.props.time}/>
      </React.Fragment>
      );
  }
}

Page.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  time: PropTypes.string.isRequired,
  inputAction : PropTypes.func.isRequired,
  inputValue : PropTypes.string.isRequired
};

export default Page;
