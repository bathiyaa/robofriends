import React from 'react';
import 'tachyons';



const Robot = ({ id, name, email }) => {

	return (
		<div className = 'bg-navy'>
			<img src = {`https://robohash.org/${name}?size=200x200`} />
		</div>
		)
}

export default Robot;