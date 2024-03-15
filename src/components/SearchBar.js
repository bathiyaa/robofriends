import React from 'react';


const SearchBar = ({ searchFunc }) => {

	return (
			<input 
				type = 'search' 
				placeholder = 'search robots'  
				onChange = {searchFunc} 
			/>
		);

}

export default SearchBar;