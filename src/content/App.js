import React from 'react';
import {Component} from 'react';
import RobotDisplay from '../components/RobotDisplay';
// import {RobotList} from './RobotList';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import FooterContent from '../components/FooterContent';
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
       const filteredRobots = present.robots.filter((robot) => {
       		return (
       				robot.name.toLowerCase().includes(present.searchValue.toLowerCase())
       			);
       })
       
       
  		
  		return (!present.robots? <h1>loading....</h1> :
  			
  			<div className = 'tc'>
  				<h1 className="calendarFont f-subheadline">Robo Friends</h1>
  				<SearchBar searchFunc = { this.onSearch } />
  				<Scroll>
  					<RobotDisplay robots={filteredRobots} />  					
  				</Scroll >
          <Footer>
            <FooterContent />
          </Footer>
  			</div>
  			
  			);

       }
}

export default App;