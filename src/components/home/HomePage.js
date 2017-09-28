import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userAction';
import Repo from './Repo';
import Searchbar from './Searchbar';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}

	repoRow(repo, index) {
		return (
			<div key={index}>
				<Repo key={repo.id} repo={repo} />
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				{this.props.repos.map(this.repoRow)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		repos: state.repos,
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
