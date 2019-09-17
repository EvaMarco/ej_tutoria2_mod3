import React from 'react';
import './scss/main.scss';
// import data from './components/DataList';
import Page from './components/Page';
import {fetchReasons} from './services/Endpoint';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      query:'',
      date: ''
    };
    this.getInputValue = this.getInputValue.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    fetchReasons()
      .then(result => {
        this.setState({
          data: result.data,
          date: result.date
        });
      }
    );
  }

  getInputValue (event){
    const TargetValue = event.currentTarget.value; 
    this.setState({query : TargetValue});
  }

  render() { 
    const {data, query} = this.state
    
      return (    
        this.state.usersdata === [] ?  
        <div className = 'App'>  
          <p> Esperando respuesta del server </p>
        </div>
        :
        <div className="App">
          <Page 
            data = {data}
            inputAction = {this.getInputValue}
            query = {query}
          />
        </div>
      );
    }
  }

export default App;
