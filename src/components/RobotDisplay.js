import React from 'react';
import Robot from './Robot';
import 'tachyons';

const RobotDisplay = ({robots}) => {

	return (
			<div >
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