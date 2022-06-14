import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

import './app.css'

class App extends Component {
	render() {
		const numbers = [1, 2, 3, 4]
		
		return (
			<div className="App">
				<Navbar
					icon="fab fa-github"
					title='Github Finder'
					// title={numbers}
				/>

				<UserItem />
			</div>
		)
	}
}

export default App
