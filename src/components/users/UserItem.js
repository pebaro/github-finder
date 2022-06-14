import React, { Component, Fragment } from 'react'

class UserItem extends Component {
	render() {
		const { login, avatar_url, html_url } = this.props.singleUser

		return (
			<Fragment>
				<div className="card text-center">
					<img
						src={avatar_url}
						alt='avatar'
						className='github-avatar'
					/>

					<h3>{login}</h3>

					<a 	href={html_url}
						className="btn btn-dark btn-sm my-1"
						target='_blank'
					>More info</a>
				</div>
			</Fragment>
		)
	}
}

export default UserItem
