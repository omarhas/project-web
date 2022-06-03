import {React,Component} from 'react';
import './assets/main.css';
import './App.css';
import { Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/dashboard'

const initialState = {
  route: 'signin',
}
class App extends Component {
  constructor() {
  	super();
  	this.state = initialState;
  }
  onRouteChange = (route) => {
  	this.setState({ route: route})
  }

  render() {
    const {route} = this.state;
    return (
      <div>
        <Dashboard/>
      </div>

    ) 
  }
}



export default App;