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
        <Filters inputAction = {this.props.inputAction}/>
        <Status data = {this.props.data}/>
        <CardList 
          data = {this.props.data} 
        />
        <Footer time = {this.props.time}/>
      </React.Fragment>
    );
  }
}
Page.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  time: PropTypes.string.isRequired,
  inputAction : PropTypes.func.isRequired,
};

export default Page;
