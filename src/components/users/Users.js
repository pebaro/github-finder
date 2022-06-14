import React, { Component, Fragment } from 'react'

import UserItem from './UserItem'

class Users extends Component {
	state = {
		users: [
			{
				id: 1,
				login: 'mojombo',
				avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo'		
			}, {
				id: 2,
				login: 'defunkt',
				avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt'		
			}, {
				id: 3,
				login: 'pjhyett',
				avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
				html_url: 'https://github.com/pjhyett'		
			}
		]
	}

	render() {
		const { users } = this.state
		// const { login, avatar_url, html_url } = this.state.users

		return (
			<Fragment>
				{
					users.map( user =>
						<UserItem key={user.id} singleUser={user} />
					)
				}
			</Fragment>
		)
	}
}

export default Users
