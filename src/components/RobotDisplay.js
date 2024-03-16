import React from 'react';
import Robot from './Robot';
import 'tachyons';

const RobotDisplay = ({robots}) => {

	return (
			<div className = 'flex flex-wrap items-center justify-center pa3  bw2 mt5'>
				{
					robots.map((robot) => {
						return (
							<Robot 
								key={robot.id}
								id={robot.id} 
								name={robot.name} 
								email={robot.email} 
							/>	
							);
					})
				}
			</div>
		)

}

export default RobotDisplay;