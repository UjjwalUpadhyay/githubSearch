import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ user, onChange }) => {
	return (
		<div className="container">
			<input type="text" className="form-control input-sm input-block js-filterable-field js-your-repositories-search" id="your-repos-filter" placeholder="Find a repository…" aria-label="Find a repository…" tabindex="2" data-url="https://github.com/" onChange={onChange} value={user}>
      </input>
		</div>
	);
};

SearchBar.propTypes = {
	user: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default SearchBar;
