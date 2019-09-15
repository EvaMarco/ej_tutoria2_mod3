import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Footer from './Footer';
import PropTypes from 'prop-types';
class Page extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <CardList data = {this.props.data}/>
        <Footer />
      </React.Fragment>
    );
  }
}
Page.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Page;
