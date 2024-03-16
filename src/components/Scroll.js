import React from 'react';
import './Scroll.css';
import 'tachyons';


const Scroll = (props) => {
	// console.log(props);
	return (
			<div className="scrollable ma2 br3 ba b--light-purple bw2 shadow-3 bgToBottom">
				{props.children}

			</div>
		);

}

export default Scroll;