import React from 'react'

const UserItem = ({ singleUser: { login, avatar_url, html_url } }) => {
	return (
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
	)
}

export default UserItem
