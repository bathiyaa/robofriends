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
        const {robots, searchValue} = this.state;
        const filteredRobots = robots.filter((robot) => {
            return  robot.name.toLowerCase().includes(searchValue)
                });

        return (!robots.length?
          <h1 className = 'h-100 mv0'>Loading</h1>:
          <div className = 'tc'>
            <h1>Robo Friends</h1>
            <SearchBar onSearchchange={this.onSearch} />
            <Scroll>
              <RobotDisplay robots={filteredRobots} />
            </Scroll>
            <footer></footer>
            
          </div>
        
            );
       }
}

export default App;