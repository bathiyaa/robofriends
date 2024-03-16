import React from 'react';
import 'tachyons';


const SearchBar = ({ searchFunc }) => {

	return (
			<input 
				className = 'h2 w5 ba b--light-purple'
				type = 'search' 
				placeholder = 'search robots'  
				onChange = {searchFunc} 
			/>
		);

}

export default SearchBar;