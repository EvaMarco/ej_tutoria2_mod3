import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      time: '0:0:0',
    }
  }
  componentDidMount(){
    setInterval(() => {this.updateClock()}, 1000);
  }
  updateClock(){
    const newDate = new Date();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const actualTime = `${hour}:${minutes}:${seconds}`;
    this.setState({time : actualTime});
  }

  render() {
    return (
      <div className="footer">
        <p> loh(); </p>
        <p className = "app__time">{this.state.time}</p>
      </div>
    );
  }
}



export default Footer;
