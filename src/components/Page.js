import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Footer from './Footer';
import Filters from './Filters';
import PropTypes from 'prop-types';
import Status from './Status';
class Page extends React.Component {

  render() {
    const {data, query, inputAction} = this.props;
    const filteredData = data.filter(item => 
      item.email.toUpperCase().includes(query.toUpperCase()));
    return ( 
      <React.Fragment>
        <Header />
        <aside className = "aside">
          <Filters inputAction = {inputAction}  />
          <Status filteredData = {filteredData}/>
        </aside>
        <main>
          <CardList 
            filteredData = {filteredData}
          />
        </main>
        <Footer />
      </React.Fragment>
      );
  }
}

Page.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputAction : PropTypes.func.isRequired,
  query : PropTypes.string.isRequired
};

export default Page;
