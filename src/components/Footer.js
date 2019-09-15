import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <p> "loh();" </p>
        <p>{this.props.time}</p>
      </div>
    );
  }
}
Footer.propTypes = {
  time: PropTypes.string.isRequired
};


export default Footer;
