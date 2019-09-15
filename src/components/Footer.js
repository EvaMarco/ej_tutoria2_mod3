import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p> "loh();" </p>
        <p>{this.props.time}</p>
      </React.Fragment>
    );
  }
}
Footer.propTypes = {
  time: PropTypes.string.isRequired
};


export default Footer;
