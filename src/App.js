import React from 'react';
import './scss/main.scss';
import data from './components/DataList'
import Page from './components/Page'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdata : data,
      time: '0:0:0'
    };
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
      <div className="App">
        <Page data = {this.state.usersdata}/>
      </div>
    );
  }
}

export default App;
