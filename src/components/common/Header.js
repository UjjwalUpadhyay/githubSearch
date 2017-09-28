import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<div>
			<div className="boxed-group-action">
	    	<a href="/new" className="btn btn-sm btn-primary" data-ga-click="Dashboard, click, Sidebar header new repo button - context:user">New repository</a>
	  	</div>
			<h3>
	    	Your repositories
	    	<span className="Counter">9</span>
	  	</h3>
		</div>
	);
};

export default Header;
