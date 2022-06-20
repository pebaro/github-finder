import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

export class User extends Component {
	componentDidMount() {
		this.props.triggerGetUser(this.props.match.params.login)
		this.props.triggerGetUserRepos(this.props.match.params.login)
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		triggerGetUser: PropTypes.func.isRequired,
		triggerGetUserRepos: PropTypes.func.isRequired
	}
	render() {
		const {
			name,
			company,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user
	
		const { loading } = this.props

		if (loading) return <Spinner />

		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back To Search
				</Link>
				Hireable: {' '}
				{
					hireable
						? (<i className="fas fa-check text-sucess" /> )
						: (<i className="fas fa-times-circle text-danger" /> )
				}
				<div className="car grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							className='round-img'
							alt='user avatar'
							style={{ width: '150px' }}
						/>
						<h1>{name}</h1>
						{
							location && <p>Location: {location}</p>
						}
					</div>
					<div>
						{
							bio && (
								<Fragment>
									<h3>Bio</h3>
									<p>{bio}</p>
								</Fragment>
							)
						}

						<a
							href={html_url}
							className='btn btn-dark my-1'
							target='_blank'
							rel="noreferrer"
						>Visit GitHub Profile</a>

						<ul>
							<li>
								{
									login &&
									<Fragment>
											<span className='profile-label'>Username: </span>  {login}
									</Fragment>
								}
							</li>
							<li>
								{
									company &&
									<Fragment>
											<span className='profile-label'>Company: </span>  {company}
									</Fragment>
								}
							</li>
							<li>
								{
									blog &&
									<Fragment>
											<span className='profile-label'>Website: </span>  {blog}
									</Fragment>
								}
							</li>
						</ul>
					</div>
				</div>

				<div className="card text-center">
					<div className="badge badge-primary">
						Followers: {followers}
					</div>
					<div className="badge badge-success">
						Following: {following}
					</div>
					<div className="badge badge-dark">
						Public Repos: {public_repos}
					</div>
					<div className="badge badge-light">
						Public Gists: {public_gists}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default User
