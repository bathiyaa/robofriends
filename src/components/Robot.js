import React from 'react';
import 'tachyons';
import './Robot.css';



const Robot = ({ id, name, email }) => {

	return (
		<div className = 'bg-navy pa3 ma4 br4 shadow-3 black grow dib w-20'>
			<img src = {`https://robohash.org/${name}?size=200x200`} />
			<h2 className='hover-gold'> {name} </h2>
			<h3 className='hover-gold'> {email} </h3>
		</div>
		)
}

export default Robot;