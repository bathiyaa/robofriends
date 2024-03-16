import React from 'react';
//import {Component} from 'react';
import { useState } from 'react';
import  { useEffect } from 'react';
import RobotDisplay from '../components/RobotDisplay';
// import {RobotList} from './RobotList';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import FooterContent from '../components/FooterContent';
import 'tachyons';

export default function App () {
  
  const [robots, setRobots] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  function onSearch (event) {
    setSearchValue( event.target.value);    
  }


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users').
      then((response) => {return response.json()}).
      then((users) => {setRobots(users)}); 
  },[]);


      
      const filteredRobots = robots.filter((robot) => {
       		return (
       				robot.name.toLowerCase().includes(searchValue.toLowerCase())
       			);
       })
       
       
  		
  		return (!robots? <h1>loading....</h1> :
  			
  			<div className = 'tc'>
  				<h1 className="calendarFont f-subheadline">Robo Friends</h1>
  				<SearchBar searchFunc = { onSearch } />
  				<Scroll>
  					<RobotDisplay robots={filteredRobots} />  					
  				</Scroll >
          <Footer>
            <FooterContent />
          </Footer>
  			</div>
  			
  			);

       }


