import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
	static defaultProps = {
		icon: "fab fa-github",
		// title: "Github App"
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	}

	render() {
		// PROPS:
		const { icon, title } = this.props

		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={icon}></i> {title}
				</h1>
			</nav>
		)
	}
}

export default Navbar
