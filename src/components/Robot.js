import React from 'react';
import 'tachyons';
import './Robot.css';



const Robot = ({ id, name, email }) => {

	return (
		<div className = 'bg-navy pa3 ma4 br4 shadow-3 black grow m-width w-20'>
			<img src = {`https://robohash.org/${name}?size=200x200`} alt = "robo"/>
			<h3 className='hover-gold blue'> {name} </h3>
			<h4 className='hover-gold blue'> {email} </h4>
		</div>
		)
}

export default Robot;