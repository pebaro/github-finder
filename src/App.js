import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

import './app.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar
					icon="fab fa-github"
					title='Github Finder'
				/>

				<div className="container">
					<Users />
				</div>
			</div>
		)
	}
}

export default App
