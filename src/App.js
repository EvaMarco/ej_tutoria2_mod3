import React from 'react';
import './scss/main.scss';
// import data from './components/DataList';
import Page from './components/Page';
import {fetchReasons} from './services/Endpoint';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdata : [],
      time: '0:0:0',
      inputValue:''
    };
    this.getInputValue = this.getInputValue.bind(this);
    setInterval(() => {this.updateClock()}, 1000);
  
  }
  getData(){
    fetchReasons()
      .then(data => {
        this.setState({
          usersdata: data.data
        });
      }
    );
  }
  updateClock(){
    const newDate = new Date();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const actualTime = `${hour}:${minutes}:${seconds}`;
    this.setState({time : actualTime});
  }
  getInputValue (event){
    const TargetValue = event.currentTarget.value; 
    this.setState({inputValue : TargetValue});
  }
  componentDidMount(){
    this.getData();
  }

  render() { 
    const filteredData = 
      this.state.usersdata.filter(item =>  item.email.includes(this.state.inputValue));
    
      return (    
        this.state.usersdata === [] ?    
        <p> Esperando respuesta del server </p>
        :
        <div className="App">
        <Page 
          filteredData = {filteredData}
          time = {this.state.time} 
          inputAction = {this.getInputValue}
          inputValue = {this.state.inputValue}
        />
        </div>
      );
    }
  }

export default App;
