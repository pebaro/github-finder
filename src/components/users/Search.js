import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

	state = {
		text: ''
	}

	static propTypes = {
		searchUsers: PropTypes.func,
		clearUsers: PropTypes.func,
		showClearUsers: PropTypes.bool,
		setAlert: PropTypes.func
	}

	onSubmit = e => {
		e.preventDefault()
		if (this.state.text === '') {
			this.props.setAlert('Please enter a search term or phrase...', 'light')
		} else {
			this.props.submitUsersSearch(this.state.text)
			this.setState({ text: '' })
		}
	}

	onChange = e => this.setState({
		[e.target.name]: e.target.value
	})

	render() {
		const { text } = this.state
		const { showClearUsers, triggerClearUsers } = this.props

		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={text}
						onChange={this.onChange}
					/>
					<input
						type="submit"
						value="Search Users"
						className="btn btn-dark btn-block"
					/>
				</form>
				{
					showClearUsers &&
					(
						<button
							className="btn btn-light btn-block"
							onClick={triggerClearUsers}
						>
							Clear Results
						</button>
					)
				}
			</div>
		)
	}
}

export default Search
