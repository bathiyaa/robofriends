import React from 'react';
import {Component} from 'react';
import RobotDisplay from '../components/RobotDisplay';
// import {RobotList} from './RobotList';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';
import 'tachyons';

class App extends Component {
  constructor () {
    super();
    this.state = {
      robots : [],
      searchValue: ''
    }
  } 

  onSearch = (event) => {
    this.setState({searchValue : event.target.value});    
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {return response.json()})
    .then((users) => {this.setState({robots:users})});

     
  }

  render() {
       
       const present = this.state;
       const filtredRobots = present.robots.filter((robot) => {
       		return (
       				robot.name.toLowerCase().includes(present.searchValue.toLowerCase())
       			);
       })
       
  		
  		return (!present.robots? <h1>loading....</h1> :
  			
  			<div>
  				<h1>Robo Friends</h1>
  				<SearchBar searchFunc = { this.onSearch } />
  				<RobotDisplay robots={filtredRobots} />
  			</div>
  			
  			);

       }
}

export default App;