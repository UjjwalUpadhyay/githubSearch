import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as userActions from '../../actions/userAction';

class RepoFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}

	updateTab(e) {
		this.props.actions.loadUser(e.target.value);
	}

  render() {
		return (
			<div className="container">
				<ul className="repo-filterer">
					<li><a className="btn-link repo-filter js-repo-filter-link text-small text-gray filter-selected" onClick={this.updateTab} value="All">All</a></li>
					<li><a className="btn-link repo-filter js-repo-filter-link text-small text-gray" onClick={this.updateTab} value="Public"> Public</a></li>
					<li><a className="btn-link repo-filter js-repo-filter-link text-small text-gray" onClick={this.updateTab} value="Private">Private</a></li>
					<li><a className="btn-link repo-filter js-repo-filter-link text-small text-gray" onClick={this.updateTab} value="Sources">Sources</a></li>
					<li><a className="btn-link repo-filter js-repo-filter-link text-small text-gray" onClick={this.updateTab} value="Forks">Forks</a></li>
				</ul>
			</div>
		);
	}
}
export default RepoFilter;
