import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header';
import SearchBar from './home/SearchBar';
import HomePage from './home/HomePage';
import RepoFilter from './home/RepoFilter';

class App extends Component {
	render() {
		return (
			<div className="repos-container">
				<div className="boxed-group flush repos user-repos" role="navigation">
					<Header />
					<div className="boxed-group-inner">
						<SearchBar />
						<RepoFilter/>
						<HomePage/>
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
