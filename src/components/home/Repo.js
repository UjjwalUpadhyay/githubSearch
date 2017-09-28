import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
	return (
		<ul className="mini-repo-list" data-filterable-for="your-repos-filter" data-filterable-type="substring">
    	<li className="public source">
      	<a className="mini-repo-list-item css-truncate" href={repo.html_url}>
          	<svg aria-hidden="true" className="octicon octicon-repo repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
        		<span className="repo-and-owner css-truncate-target" title={repo.name}>
          	<span className="repo">{repo.name}</span>
        	</span>
      	</a>
    	</li>
		</ul>
	);
};

Repo.propTypes = {
	repo: PropTypes.object.isRequired
};

export default Repo;
